$(document).ready(function(){
	$('#map_canvas').css('height', $('.ons-page-inner:last').height());
// when not overlayed
	$('#map_canvas').css('height', $('.ons-page-inner:last').height() + 20);
});

document.addEventListener("deviceready", function() {
  // Define a div tag with id="map_canvas"
  var mapDiv = document.getElementById("map_canvas");

  // Initialize the map plugin
  var map = plugin.google.maps.Map.getMap(mapDiv);

  // You have to wait the MAP_READY event.
  map.on(plugin.google.maps.event.MAP_READY, onMapInit);
});

function onMapInit(map) {
}