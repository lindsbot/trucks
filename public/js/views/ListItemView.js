var ListItemView = Backbone.View.extend({
  events: {
    'click': function() {
      this.$el.siblings().removeClass('selected')
      this.$el.addClass('selected');
    }
  },
  tagName: 'li',
  className: 'listItemView',
  template: _.template('<ul><li><%= applicant %></li><li><%= address %></li><li><%= fooditems %></li></ul>'),
  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
