var AppView = Backbone.View.extend({
  initialize: function() {
    var self = this;
    this.mapView = new MapView({model: new Map()});
    this.mapView.render();
    this.trucksView = new TrucksView({collection: self.model.filteredTrucks});
    this.trucksView.render();
    this.listView = new ListView();
    this.listView.render();



    self.model.allTrucks.fetch().done(function(){
      console.log('hereeeeee')
      console.log(self.model.allTrucks)
      //debugger;
    });

    google.maps.event.addListener(map, 'bounds_changed', _.bind(function(){
      this.model.allTrucks.fetch({
        success: _.bind(this.resetCollection, this)
      });
    }, this));
  },

  render: function() {

  },

  resetCollection: function() {
    console.log("resetting")
    var bounds = map.getBounds();
    var updatedTrucks = _.filter(this.model.allTrucks.models, function(truck){
      var lat = truck.get('latitude');
      var lng = truck.get('longitude');
      var latLng = new google.maps.LatLng(lat,lng);
      if (bounds.contains(latLng)) { return true; }
    });
    this.trucksView.collection.reset(updatedTrucks);
    console.log(this.trucksView.collection)
  }
});

