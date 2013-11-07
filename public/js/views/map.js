var MapView = Backbone.View.extend({
  initialize: function(){
        var mapOptions = {
          center: new google.maps.LatLng(37.7577, -122.4376),
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        function geolocationSuccess(position) {
          var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          mapOptions.center = latLng;
        }

        function geolocationError(positionError) {
          document.getElementById("error").innerHTML += "Error: " + positionError.message + "<br />";
        }

        function geoLocate() {
          if (navigator.geolocation) {
            var positionOptions = {
            enableHighAccuracy: true,
            timeout: 10 * 1000 // 10 seconds
          };
          navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);

          } else {
            // browser doesn't support geolocation
            document.getElementById("error").innerHTML += "Your browser doesn't support the Geolocation API";
          }
        }

        geoLocate();

        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  }

});