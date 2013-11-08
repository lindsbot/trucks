var TrucksView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('sync', this.render, this);
    this.collection.fetch();
  },
  render: function() {
    console.log("rendering...", this.collection)
    var bounds = map.getBounds();
    _.each(this.collection.models, function(truck){
      var lat = truck.get('latitude');
      var lng = truck.get('longitude');
      var name = truck.get('applicant');
      var latLng = new google.maps.LatLng(lat,lng);
        var marker = new google.maps.Marker({
          map: map,
          position: latLng,
          title: name
        });
    });
  }

});

    //google.maps.event.addListener(map, 'bounds_changed', ???);