var tileContainers = document.querySelectorAll('.tile-container');

tileContainers.forEach(function(tileContainer) {
	var tile = document.createElement('div');
	tile.classList.add('tiles');
	tileContainer.appendChild(tile);
})