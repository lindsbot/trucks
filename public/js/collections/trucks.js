var Trucks = Backbone.Collection.extend({
  model: TruckModel,
  url: 'http://data.sfgov.org/resource/rqzj-sfat.json'
});