var xhr = {
	get: function(url, callback) {
		var xhttp = new XMLHttpRequest();
		xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
		xhttp.onreadystatechange = function() {
			console.log(xhttp.readyState, xhttp.status);
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				callback(xhttp.responseText);
			}
		};
		xhttp.open("GET", url, true);
		xhttp.send();
	}
};
