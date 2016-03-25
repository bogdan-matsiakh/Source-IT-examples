var clickButton = document.getElementById('handler');
var removeButton = document.getElementsByClassName('remove-listeners')[0];

clickButton.addEventListener('click', function() {
	console.log('custom click');
});
clickButton.addEventListener('click', onClick2);
clickButton.addEventListener('mouseover', onMouseOver);
clickButton.addEventListener('mouseout', onMouseOut);

removeButton.addEventListener('click', onRemoveButtonClick);

function onClick() {
	console.log('click');
}
function onClick2() {
	console.log('click');
}
function onMouseOut() {
	console.log('out');
}
function onMouseOver() {
	console.log('over');
}
function onRemoveButtonClick() {
	clickButton.removeEventListener('click', onClick2);
}