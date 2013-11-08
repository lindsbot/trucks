var Trucks = Backbone.Collection.extend({
  model: TruckModel,
  url: 'http://data.sfgov.org/resource/rqzj-sfat.json',
  resetCollection: function() {
    bounds = map.getBounds();
    var updatedTrucks = _.filter(this.collection.models, function(truck){
      var lat = truck.get('latitude');
      var lng = truck.get('longitude');
      var latLng = new google.maps.LatLng(lat,lng);
      if (bounds.contains(latLng)) { return true; }
    });
    this.collection.reset(updatedTrucks);
  }
});

