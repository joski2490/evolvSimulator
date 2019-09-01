const Settings = {		
	//photosyntheses
	sunEnergyPerReaction: .3,
	nutrientsPerReaction: .1,

	nutrientsPercOnDeath: .3,
	minimumEnergyToBeAlive: 50,

	mutationChance: 1,
	mutationRate: 0.2,
	plantLeafSize: 5,
	creatureBiteRange: 2,

	plantRange: [5, 150], // min - max plants
	creatureRange: [5, 150], // min - max plants

	biteConstant: 0.1,

	energyConsumption: {
		default: 0, // to be kept alive
		plantAgeConstant: .00001,
		creatureAgeConstant: .0001, // degration of the body makes it less efficient
		sizeConstant: .0001,
		eyeConstant: .000001,
		neuronConstant: 0.0,
		turnConstant: 0.005,
		moveConstant: .05,
		energyPercPerBite: .2,
	},

	performance: {
		checkCollisionFrameCount: 1, // checks the collisions every x frames
	},

	nutrients: {
		nutrientsPerUpdate: 4,
		percWasteToNutrients: .1,
		pxPerTile: 50,
		percNutrientsPerFrame: .0005
	}
}

