var AppView = Backbone.View.extend({
  initialize: function() {
    this.mapView = new MapView({model: new Map()});
    this.mapView.render();

    this.trucksView = new TrucksView({collection: this.model.filteredTrucks});
    this.trucksView.render();

    this.listView = new ListView({collection: this.model.filteredTrucks});
    this.listView.render();

    google.maps.event.addListener(map, 'bounds_changed', 
      _.debounce(
        _.throttle(
          _.bind(function(){
            this.model.allTrucks.fetch({
              success: _.bind(this.resetCollection, this)
            });
          }, this)), 250), 250, true);
  },

  resetCollection: function() {
    var bounds = map.getBounds();
    var updatedTrucks = _.filter(this.model.allTrucks.models, function(truck){
      var lat = truck.get('latitude');
      var lng = truck.get('longitude');
      var latLng = new google.maps.LatLng(lat,lng);
      if (bounds.contains(latLng)) { return true; }
    });
    
    this.trucksView.collection.reset(updatedTrucks);
    this.listView.render();
  }
});

