console.log("Sanity Check: Js working!");

var addPinButton = document.getElementById('add-pin-button');

addPinButton.onclick = function(e) {
	e.preventDefault();
	console.log('Clicked add pin button');
};