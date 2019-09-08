
const antiCache = Math.round(Math.random() * 100000);
importScripts("settings.js?a="		+ antiCache);
importScripts("collision.js?a=" 	+ antiCache);
importScripts("neuralNetwork.js?a=" + antiCache);
importScripts("nutrientGrid.js?a=" 	+ antiCache);
importScripts("entity.js?a=" 		+ antiCache);
importScripts("creature.js?a=" 		+ antiCache);
importScripts("plant.js?a=" 		+ antiCache);
importScripts("main.js?a="		 	+ antiCache);




const actions = {
	startRunning: 		function () {Main.running = true; Main.update()},
	startHyperRun: 		function () {Main.running = true; Main.loop(Infinity);},
	stopRunning: 		function () {Main.running = false;},
	getMain: 			function () {return JSON.parse(JSON.stringify(Main))},
	setup: 				setup,
	getData: 			exportData,
	getSettings: 		function() {return Settings;},
	writeSettings: 		function(_settings) {Settings = _settings}
};



this.onmessage = function(_e) {
	let data = _e.data;

	let result = "E_actionNotFound";
	for (action in actions) 
	{
		if (data.action != action) continue;
		
		try {
			result = actions[action](data.parameters);
		}
		catch (e) {
			console.warn("An error accured", e);
		}
	}

	if (result == "E_actionNotFound") return console.warn("An unknown error accured, perhaps the function doesn't exist.");

	this.postMessage({
		action: _e.data.action,
		result: result
	});
}






function setup(_parameters) {
	Main.worldWidth = _parameters.width;
	Main.worldHeight = _parameters.height
	Main.nutrients = createNutrientGrid();
	Main.update();
}

function exportData() {
	let data = {};
	data.nutrients = Main.nutrients.export();
	data.entities = JSON.parse(JSON.stringify(Main.entities));
	data.statistics = {
		frames: Main.updates,
		graphLines: [
			Main.creatures,
			Main.plants,
			Main.totalNutrients / Main.nutrients.length / Main.nutrients[0].length * 1000,
		]
	}
	
	return data;
}






