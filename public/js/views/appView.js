var AppView = Backbone.View.extend({
  initialize: function() {
    this.mapView = new MapView({model: new Map()});
    this.mapView.render();
    this.trucksView = new TrucksView({collection: this.model.filteredTrucks});
  },
  // onBoundsChange: function(){
  //   console.log(this)
  //   this.model.updateTrucks();
  // },
  resetCollection: function() {
    bounds = map.getBounds();
    var updatedTrucks = _.filter(this.model.allTrucks, function(truck){
      console.log(truck)
      var lat = truck.get('latitude');
      var lng = truck.get('longitude');
      var latLng = new google.maps.LatLng(lat,lng);
      if (bounds.contains(latLng)) { return true; }
    });
    this.model.filteredTrucks.reset(updatedTrucks);
  }
});

