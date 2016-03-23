window.onload = function() {
	var changeContentButton = document.getElementById('send-request');
	var showMarsImagesButton = document.getElementById('show-mars-images');
	var marsImages = document.getElementById('mars-images');

	changeContentButton.addEventListener('click', function(event) {
		xhr.get('data/data.json', function(response) {
			console.log(response);
		});
	});

	showMarsImagesButton.addEventListener('click', function(event) {
		xhr.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=CM1T7kQolcZFhhewvRLrI2QRikGKizQ0AFp7PLGo', function(response) {
			console.log(JSON.parse(response));
		});
	});
}

