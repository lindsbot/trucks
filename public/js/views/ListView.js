var ListView = Backbone.View.extend({
  tagName: 'ul',
  render: function() {
    console.log('rendering!!!')
    console.log(this.collection)

    this.$el.empty();
    $('#list-container').remove();
    //this.$el.html()
    //this.$el.append('<li></li>').text("Food Trucks Near You")
    this.$el.append(
        this.collection.map(function(truck){
          return new ListItemView({model: truck}).render();
        })
    );

    var container = $("<div id='list-container'></div>");
    $('#map-canvas').append(container);
    container.append(this.$el)
  },

  className: 'truckList'

});
