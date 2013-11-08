var AppView = Backbone.View.extend({
  initialize: function() {
    this.collection = new TrucksView();
    this.mapView = new MapView({collection: this.collection});
    this.mapView.render();
  }
});