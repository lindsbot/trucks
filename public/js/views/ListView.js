var ListView = Backbone.View.extend({
  tagName: 'ul',
  initialize: function() {

  },

  render: function() {
    console.log('rendering!!!')
    console.log(this.collection)
    this.$el.children().detach();
    //this.$el.html()

    return this.$el.append(
        this.collection.map(function(truck){
          return new ListItemView({model: truck}).render();
        })
    ).appendTo('#map-canvas');
    // $('#map-canvas').append(this.$el);
  },

  className: 'truckList'

});
