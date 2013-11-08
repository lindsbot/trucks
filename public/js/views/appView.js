var AppView = Backbone.View.extend({
  initialize: function() {
    this.mapView = new MapView({model: new Map()});
    this.mapView.render();
    this.trucksView = new TrucksView({collection: this.model.filteredTrucks});
  }
});

