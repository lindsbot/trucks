var ListView = Backbone.View.extend({
  tagName: 'ul',
  render: function() {
    this.$el.empty();

    $('#list-container').remove();
    
    this.$el.append(
        this.collection.map(function(truck){
          return new ListItemView({model: truck}).render();
        })
    );

    var container = $("<div id='list-container'></div>");
    $('#map-canvas').append(container);

    var title = $("<h2 class='listTitle'></h2>");
    title.append("Food Trucks Near You");
    container.append(title);
    container.append(this.$el);
  },

  className: 'truckList'

});
