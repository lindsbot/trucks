var MapView = Backbone.View.extend({
  // model: Map,
  initialize: function(){
    this.mapOptions = {
      center: new google.maps.LatLng(37.7577, -122.4376),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
  },
  render: function(){
    if (navigator.geolocation) {
      var positionOptions = {
        enableHighAccuracy: true,
        timeout: 10 * 1000 // 10 seconds
      };
      navigator.geolocation.getCurrentPosition(_.bind(this.geolocationSuccess, this), _.bind(this.geolocationError, this), positionOptions);
    } else {
      // browser doesn't support geolocation
      document.getElementById("error").innerHTML += "Your browser doesn't support the Geolocation API";
    }

    window.map = new google.maps.Map(document.getElementById("map-canvas"), this.mapOptions);
    
    var bind = function(object, method) {
      return function() {
        return method.apply(object, arguments);
      };
    };

    google.maps.event.addListener(map, 'bounds_changed', bind(this, this.collection.render));
    this.listenTo(this.collection, 'sync', bind(this, this.collection.render));
  },
  geolocationSuccess: function(position) {
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.mapOptions.center = latLng;

    this.collection.render();
  },
  geolocationError: function(positionError) {
    document.getElementById("error").innerHTML += "Error: " + positionError.message + "<br />";
  }
});


