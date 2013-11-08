var ListItemView = Backbone.View.extend({
  tagName: 'li',
  className: 'listItemView',
  template: _.template('<ul><li><%= applicant %></li><li><%= applicant %></li></ul>'),
  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
