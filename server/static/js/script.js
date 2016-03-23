window.onload = function() {
	var changeContentButton = document.getElementById('send-request');

	changeContentButton.addEventListener('click', function(event) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			console.log(xhttp.readyState, xhttp.status);
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				// success code
			}
		};
		xhttp.open("GET", "data.json", true);
		xhttp.send();
	});


}

