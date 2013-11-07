var TruckModel = Backbone.Model.extend({
  initialize: function(response) {
    console.log("HEY")
  },
  lat: function() {
    this.get('latitude');
  },
  lng: function() {
    this.get('longitude');
  }
}); 