var TrucksView = Backbone.View.extend({
  initialize: function() {
    this.collection = new Trucks()
    this.collection.on('sync', this.render, this);
    this.collection.fetch();
  },
  render: function() {
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
    console.log(this)

  }

});