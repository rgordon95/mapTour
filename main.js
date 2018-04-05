
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBs2Q2XLa17xwLXa_nzdWG8AN2nrJ6dBno&callback=initMap"

function initMap() {
	var uluru = {lat: 40.7128, lng: -74.0060};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 18,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}
