function initMap() {
	//create center marker at UCSD
	var ucsd_ltlng = {lat:32.878884, lng:-117.235912};

	//Creating a map opject and specifying the DOM element for display
	var map = new google.maps.Map(document.getElementById('map'), {
		center: ucsd_ltlng,
		zoom: 15
	});

	var marker = new google.maps.Marker({
		position: ucsd_ltlng,
		map: map,
		title: "UCSD"
	});
}