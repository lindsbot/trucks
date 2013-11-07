var AppView = Backbone.View.extend({
  initialize: function() {
    this.collection = new TrucksView();
    this.mapView = new MapView();
    this.mapView.render();

    this.listenTo(this.collection, 'sync', console.log("data sync"));
    this.filterTrucks()
  },
  render: function() {
    google.maps.event.addDomListener(window, 'load', this.initialize);
  },
  filterTrucks: function() {
    var bounds = map.getBounds();
    console.log(bounds)
    var trucksToShow = this.collection.filter(function(truck){
      var location = new google.maps.LatLng(truck.lat(), truck.lng());
      return bounds.contains(location);
    });
    this.collection.reset(trucksToShow);
  }

});