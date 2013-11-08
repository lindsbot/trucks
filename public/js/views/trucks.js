var TrucksView = Backbone.View.extend({
  initialize: function() {
    //this.collection = new Trucks({model: new TruckModel()});
    this.collection.on('sync', this.render, this);
    this.collection.fetch();

    console.log(this.collection)
    //google.maps.event.addListener(map, 'bounds_changed', console.log("bounds_changed"));
    this.listenTo(this.collection, 'sync', console.log("collection sync - in TrucksView"));
  },
  render: function() {
    console.log("rendering")
    var bounds = map.getBounds();
    _.each(this.collection.models, function(truck){
      var lat = truck.get('latitude');
      var lng = truck.get('longitude');
      var name = truck.get('applicant');
      var latLng = new google.maps.LatLng(lat,lng);
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

    //google.maps.event.addListener(map, 'bounds_changed', ???);