function initMap() {
    // Map options
    var options = {
        zoom: 8,
        center: { lat: 35.4676, lng: -97.5164}
    }

    //New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    //Add Marker
    var marker = new google.maps.Marker({
        position:{lat:35.4676, lng: -97.5164},
        map: map,
        icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    });

    var infoWindow = new Google.maps.infoWindow({
        content: "<h1> Oklahoma City </h1> "
    });

    marker.addlistener("click", function(){
        infoWindow.open(map, marker);
    })

}