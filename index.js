		api.trains.registerTrainType({
			id: "vn-HCMC1",
			name: "HCMC Line 1",
			description: "3-car trainset on the Ho Chi Minh City Metro Line 1. Capable of multiple working for 2 sets for 6 cars.",
			stats: {
				maxSpeed: 30.6,
    			maxAcceleration: 1.1,
   				maxDeceleration: 1.1,
    			maxLateralAcceleration: 1.8,
    			maxSlopePercentage: 5.5,
    			maxSpeedLocalStation: 13.88,
    			crossoverSpeed: 6.7,
    			stopTimeSeconds: 50,
    			turnaroundTimeSeconds: 90,

    // Cant (Superelevation) - Required by API to avoid broken physics/NaN
    			maxCantMm: 150, 
    			maxCantDeficiencyMm: 110, 

    // Track geometry
    			minTurnRadius: 25,
    			minStationTurnRadius: 600,
    			parallelTrackSpacing: 2.765,
    			trackClearance: 2.10,

    // Rolling stock
    			minCars: 3,
    			maxCars: 6,
    			carsPerCarSet: 3,
    			capacityPerCar: 310,
    			carLength: 20.50,
    			trainWidth: 3.00,
    			minStationLength: 80,
    			maxStationLength: 125,

    // Costs
    			carCost: 7250000,
    			baseTrackCost: 87300,
    			baseStationCost: 60000000,
    			trainOperationalCostPerHour: 400.0,
    			carOperationalCostPerHour: 50.0,
    			trackMaintenanceCostPerMeter: 300,
   				stationMaintenanceCostPerYear: 300,
			},
			appearance: { color: "#00B4FF" },
			compatibleTrackTypes: ["heavy-metro"],
			maxOverpassSpan: 150
		})
		api.trains.registerTrainType({
			id: "vn-HN2A",
			name: "Hanoi Metro Line 2A",
			description: "4-car CRRC train set used on Hanoi Metro line 2A. Capable of only 4 car operations",
			stats: {
				maxSpeed: 22.2,
				maxAcceleration: 1.1,
				maxDeceleration: 1.1,
				maxLateralAcceleration: 1.8,
				maxSlopePercentage: 5.5,
				minTurnRadius: 25,
				parallelTrackSpacing: 4.24,
				trackClearance: 2.10,
				minStationTurnRadius: 600,
				minStationLength: 80,
				maxStationLength: 125,
				maxSpeedLocalStation: 13.88,
				minCars: 3,
				maxCars: 6,
				carsPerCarSet: 3,
				capacityPerCar: 310,
				carLength: 20.50,
				trainWidth: 3.00,
				carCost: 7250000,
				baseTrackCost: 87300,
				baseStationCost: 60000000,
				scissorsCrossoverCost: 5750000,
				trainOperationalCostPerHour: 400.0,
				carOperationalCostPerHour: 50.0,
				trackMaintenanceCostPerMeter: 300,
				stationMaintenanceCostPerYear: 300,
				stopTimeSeconds: 50,
				tphLimit: 42,
				crossoverSpeed: 6.7, 
				turnaroundTimeSeconds: (90)
			},
			appearance: { color: "#00B4FF" },
			compatibleTrackTypes: ["heavy-metro"],
			maxOverpassSpan: 150
		})
