'use strict';

var position = {lat: 39.8779614, lng: -3.9447705};

var mapOptions = {	
	center: position,
	zoom: 15,
	mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("map"), mapOptions);

var markerOptions = {
	position: position,
	map: map,
	title: "Hydroad"
};

var market = new google.maps.Marker(markerOptions);

