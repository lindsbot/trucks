var App = Backbone.Model.extend({
  initialize: function() {
    this.allTrucks = new Trucks();
    this.filteredTrucks = new Trucks();
  }
});

