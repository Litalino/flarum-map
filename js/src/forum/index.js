import app from 'flarum/forum/app';
import Post from 'flarum/components/Post';
import { extend } from 'flarum/common/extend';
import File from './components/File';

app.initializers.add('jeromegillard/osm', () => {
  app.store.models.files = File;

});

extend(Post.prototype, 'oncreate', function () {
  this.postId = this.attrs.post.id();  
  this.tilesProvider = app.forum.attribute("tilesProvider")??'osm';
  this.mapboxKey = app.forum.attribute("mapbox.key")??'';
  this.thunderforestKey  = app.forum.attribute("thunderforest.key")??'';
  
  switch(this.tilesProvider){
    case "mapbox":
      this.tileLayerURL = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token='+this.mapboxKey;
      break;
    default:
      this.tileLayerURL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
  }

  // copy this for usage within .each()
  let so = this;

  //for each gpx file in this post, loop and map
  this.$('.osmFile').each(function( i ) { 

    // grab the uploaded gpx file's UUID and url
    let uuid = $(this).data('fofUploadDownloadUuid');
    let nid = 'map-'+so.postId+i+'-'+uuid;
    let url = app.forum.attribute('apiUrl') + '/fof/download';
            url += '/' + uuid;
            url += '/' + so.postId;
            url += '/' + app.session.csrfToken;

    /*  change the template rendering to insert a new id to the map element.
      * this allows us to have an unique div id even if a same file is displayed
      * more than one time
    */
    var oldNode = document.getElementById('map--'+uuid);
    var newNode = oldNode.cloneNode(true);
    newNode.id = nid;
    oldNode.parentNode.replaceChild(newNode, oldNode);

    // Get the map element
    let map = L.map(nid);    

    // Set the tiles provider
    let tiles = L.tileLayer(so.tileLayerURL, 
    {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/light-v9',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(map);

    // Display the GPX file in it thanks to https://github.com/mpetazzoni/leaflet-gpx
    new L.GPX(url, 
        {
          async: true,
          marker_options: {
            startIconUrl: '/assets/extensions/jeromegillard-osm/pin-icon-start.png',
            endIconUrl: '/assets/extensions/jeromegillard-osm/pin-icon-end.png',
            shadowUrl: '/assets/extensions/jeromegillard-osm/pin-shadow.png',
            wptIconUrls: {
              '': '/assets/extensions/jeromegillard-osm/default-waypoint.png',
              'Geocache Found': '/assets/extensions/jeromegillard-osm/geocache.png',
              'Park': '/assets/extensions/jeromegillard-osm/tree.png'
            },
          }
        }
      ).on('loaded', function(e) {
      map.fitBounds(e.target.getBounds());
    }).addTo(map);

  });

});