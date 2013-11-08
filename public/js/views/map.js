var MapView = Backbone.View.extend({
  initialize: function(){    
    this.mapOptions = {
      center: new google.maps.LatLng(37.7577, -122.4376),
      zoom: 15,
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
  },
  geolocationSuccess: function(position) {
    console.log("geolocation success")
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.mapOptions.center = latLng;
  },
  geolocationError: function(positionError) {
    console.log("geolocation error")
    document.getElementById("error").innerHTML += "Error: " + positionError.message + "<br />";
  }
});


