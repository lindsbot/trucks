var Trucks = Backbone.Collection.extend({
  model: TruckModel,
  url: 'http://data.sfgov.org/resource/rqzj-sfat.json'
  // localStorage: new Backbone.LocalStorage('food_trucks'),
  // initialize: function() {
  //   this.fetch().done(_.bind(function(){
  //     console.log("initialize")
  //     debugger;
  //     this.sync();
  //   }, this));
  // }
});

