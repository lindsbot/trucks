var TruckView = Backbone.View.extend({
  initialize: function() {
    this.collection = new Trucks()
    this.collection.on('sync', this.render, this);
    this.collection.fetch();
  },
  render: function() {
    // console.log('render function: ')
    // console.log(this.collection.toJSON());
    _.each(this.collection.toJSON(), function(element){
      var lat = element.latitude;
      var lng = element.longitude;
      var latLng = new google.maps.LatLng(lat, lng)
      var marker = new google.maps.Marker({
        map: map,
        position: latLng,
        title: "hi mom!"
      });
    })

  }

});