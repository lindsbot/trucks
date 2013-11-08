var ListView = Backbone.View.extend({
  className: 'truckList',
  render: function() {
    $('#map-canvas').append(this.$el);
  }
});
