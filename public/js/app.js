var App = Backbone.Model.extend({
  initialize: function() {
    this.allTrucks = new Trucks();
    this.filteredTrucks = new Trucks();
    //this.listenTo(this.allTrucks, 'sync', console.log(this.allTrucks));
  },
  updateTrucks: function(){
    console.log("trying")
    this.allTrucks.fetch();
  }
});

