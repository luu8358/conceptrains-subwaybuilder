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
				// Performance
				maxSpeed: 22.2,
				maxAcceleration: 1.1,
				maxDeceleration: 1.1,
				maxLateralAcceleration: 1.8,
				maxSlopePercentage: 5.5,
				maxSpeedLocalStation: 13.88,
				crossoverSpeed: 6.7,
				stopTimeSeconds: 50,
				turnaroundTimeSeconds: 90,

				// Cant (Superelevation) - Required by API to avoid broken physics/NaN
				maxCantMm: 120,
				maxCantDeficiencyMm: 90,

				// Track geometry
				minTurnRadius: 25,
				minStationTurnRadius: 600,
				parallelTrackSpacing: 4.24,
				trackClearance: 2.10,

				// Rolling stock
				minCars: 4,
				maxCars: 4,
				carsPerCarSet: 4,
				capacityPerCar: 240,
				carLength: 19.00,
				trainWidth: 2.80,
				minStationLength: 80,
				maxStationLength: 125,

				// Costs
				carCost: 5500000,
				baseTrackCost: 66260,
				baseStationCost: 45000000,
				trainOperationalCostPerHour: 350.0,
				carOperationalCostPerHour: 45.0,
				trackMaintenanceCostPerMeter: 250,
				stationMaintenanceCostPerYear: 250,

				// Capacity
				tphLimit: 42
			},
			appearance: { color: "#00B4FF" },
			compatibleTrackTypes: ["heavy-metro"],
			maxOverpassSpan: 150
			})
			api.trains.registerTrainType({
			id: "vn-HN3",
			name: "Hanoi Metro Line 3",
			description: "4-car Alstom Metropolis train set used on Hanoi Metro line 3. Expandable to 5 or 6 cars",
			stats: {
				// Performance
				maxSpeed: 22.2,
				maxAcceleration: 1.1,
				maxDeceleration: 1.1,
				maxLateralAcceleration: 1.8,
				maxSlopePercentage: 5.5,
				maxSpeedLocalStation: 13.88,
				crossoverSpeed: 6.7,
				stopTimeSeconds: 50,
				turnaroundTimeSeconds: 90,

				// Cant (Superelevation) - Required by API to avoid broken physics/NaN
				maxCantMm: 160,
				maxCantDeficiencyMm: 110,

				// Track geometry
				minTurnRadius: 25,
				minStationTurnRadius: 600,
				parallelTrackSpacing: 2.665,
				trackClearance: 2.10,

				// Rolling stock
				minCars: 4,
				maxCars: 6,
				carsPerCarSet: 4,
				capacityPerCar: 235,
				carLength: 20.00,
				trainWidth: 2.90,
				minStationLength: 80,
				maxStationLength: 125,

				// Costs
				carCost: 3200000,
				baseTrackCost: 362900,
				baseStationCost: 95000000,
				trainOperationalCostPerHour: 400.0,
				carOperationalCostPerHour: 50.0,
				trackMaintenanceCostPerMeter: 350,
				stationMaintenanceCostPerYear: 350,

				// Capacity
				tphLimit: 42
			},
			appearance: { color: "#5cb85c" },
			compatibleTrackTypes: ["heavy-metro"],
			maxOverpassSpan: 150

