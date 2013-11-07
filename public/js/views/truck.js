var TruckView = Backbone.View.extend({
  initialize: function() {
    this.collection = new Trucks({model: TruckModel})
    this.collection.on('sync', this.render, this);
    this.collection.fetch();

  },
  render: function() {
    console.log('render function: ')
    console.log(this.collection.toJSON());
  }

});