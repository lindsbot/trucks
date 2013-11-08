var TrucksView = Backbone.View.extend({
  model: TruckModel,
  initialize: function() {
    this.collection = new Trucks();
    this.collection.on('sync', this.render, this);
    this.collection.fetch();
  },
  render: function() {
    var bounds = map.getBounds();
    console.log(bounds);
    _.each(this.collection.models, function(truck){
      var lat = truck.get('latitude');
      var lng = truck.get('longitude');
      var latLng = new google.maps.LatLng(lat,lng);
      var name = truck.get('applicant');
      if (bounds.contains(latLng)) {
        var marker = new google.maps.Marker({
          map: map,
          position: latLng,
          title: name
        });
      }
    });
  }
});

