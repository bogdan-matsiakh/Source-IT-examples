window.onload = function() {
	var changeContentButton = document.getElementById('send-request');

	changeContentButton.addEventListener('click', function(event) {
		xhr.get('data/data.json', function(response) {
			console.log(response);
		});
	});


}

