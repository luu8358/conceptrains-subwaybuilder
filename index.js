function waitForAPI() {
    return new Promise((resolve) => {
        function check() {
            if (window.SubwayBuilderAPI) resolve(window.SubwayBuilderAPI);
            else setTimeout(check, 500);
        }
        check();
    });
}

async function initMod() {
    try {
        const API = await waitForAPI();
        console.log("Subway Builder API is ready:", API.version);
		
		API.trains.registerTrainType({
            id: 'vn-HCMC1',
            name: 'HCMC Line 1 Train',
            description: '3-car trainset on the Ho Chi Minh City Metro Line 1. Capable of multiple working for 2 sets for 6 cars.',
            stats: {
                maxAcceleration: 1.1,
                maxDeceleration: 1.1,
                maxSpeed: 30.6,
                maxSpeedLocalStation: 13.88,
                capacityPerCar: 310,
                carLength: 20.4,
                minCars: 3,
                maxCars: 6,
                carsPerCarSet: 3,
                carCost: 7_250_000,
                trainWidth: 3.0,
                minStationLength: 80,
                maxStationLength: 130,
                baseTrackCost: 87_300,
                baseStationCost: 60_000_000,
                trainOperationalCostPerHour: 400,
                carOperationalCostPerHour: 50,
                scissorsCrossoverCost: 50,
                stopTimeSeconds: 35,
				turnaroundTimeSeconds: 90,
                maxLateralAcceleration: 1.8,
                parallelTrackSpacing: 2.765,
                trackClearance: 2.1,
                minTurnRadius: 25,
                minStationTurnRadius: 600,
                trackMaintenanceCostPerMeter: 300,
                stationMaintenanceCostPerYear: 300,
                tphlimit: 42,
                crossoverSpeed: 6.7,
				maxSlopePercentage: 5.5,
            },
            compatibleTrackTypes: ['heavy-metro'],
            allowAtGradeRoadCrossing: true,
            appearance: {
                color: '#00b4FF'
            },
            elevationMultipliers: {
                AT_GRADE: 3, 
                ELEVATED: 0, 
                CUT_AND_COVER: 0
            },
        }),
		API.ui.showNotification('HCMC Line 1 loaded successfully', 'success')

		API.trains.registerTrainType({
            id: 'vn-HN2A',
            name: "Hanoi Metro Line 2A",
            description: "4-car CRRC train set used on Hanoi Metro line 2A. Capable of only 4 car operations",
            stats: {
                maxAcceleration: 1.1,
                maxDeceleration: 1.1,
                maxSpeed: 22.2,
                maxSpeedLocalStation: 13.88,
                maxSlopePercentage: 5.5,
                capacityPerCar: 240,
                carLength: 19.0,
                minCars: 4,
                maxCars: 4,
                carsPerCarSet: 4,
                carCost: 5_500_000,
                trainWidth: 2.8,
                minStationLength: 80,
                maxStationLength: 125,
                baseTrackCost: 66_260,
                baseStationCost: 45_000_000,
                trainOperationalCostPerHour: 350,
                carOperationalCostPerHour: 50,
                scissorsCrossoverCost: 50,
                stopTimeSeconds: 50,
				turnaroundTimeSeconds: 90,
                maxLateralAcceleration: 1.8,
                parallelTrackSpacing: 2.24,
                trackClearance: 2.1,
                minTurnRadius: 25,
                minStationTurnRadius: 600,
                trackMaintenanceCostPerMeter: 250,
                stationMaintenanceCostPerYear: 250,
                tphlimit: 42,
                crossoverSpeed: 6.7,
                maxCantMm: 120,
                maxCantDeficiencyMm: 90,
            },
            compatibleTrackTypes: ['heavy-metro'],
            allowAtGradeRoadCrossing: true,
            appearance: {
                color: '#00b4FF'
            },
            elevationMultipliers: {
                AT_GRADE: 3, 
                ELEVATED: 0, 
                CUT_AND_COVER: 0
            },
        }),
		API.ui.showNotification('Hanoi Line 2A loaded successfully', 'success')

		API.trains.registerTrainType({
            id: 'vn-HN3',
            name: "Hanoi Metro Line 3",
            description: "4-car Alstom Metropolis train set used on Hanoi Metro line 3. Expandable to 5 or 6 cars",
            stats: {
                maxAcceleration: 1.1,
                maxDeceleration: 1.1,
                maxSpeed: 22.2,
                maxSpeedLocalStation: 13.88,
                maxSlopePercentage: 5.5,
                capacityPerCar: 235,
                carLength: 20.0,
                minCars: 4,
                maxCars: 6,
                carsPerCarSet: 2,
                carCost: 3_200_000,
                trainWidth: 2.8,
                minStationLength: 80,
                maxStationLength: 125,
                baseTrackCost: 102_260,
                baseStationCost: 60_000_000,
                trainOperationalCostPerHour: 350,
                carOperationalCostPerHour: 50,
                scissorsCrossoverCost: 50,
                stopTimeSeconds: 50,
				turnaroundTimeSeconds: 90,
                maxLateralAcceleration: 1.8,
                parallelTrackSpacing: 2.66,
                trackClearance: 2.1,
                minTurnRadius: 25,
                minStationTurnRadius: 600,
                trackMaintenanceCostPerMeter: 250,
                stationMaintenanceCostPerYear: 250,
                tphlimit: 42,
                crossoverSpeed: 6.7,
                maxCantMm: 120,
                maxCantDeficiencyMm: 90,
            },
            compatibleTrackTypes: ['heavy-metro'],
            allowAtGradeRoadCrossing: true,
            appearance: {
                color: '#00b4FF'
            },
            elevationMultipliers: {
                AT_GRADE: 3, 
                ELEVATED: 0, 
                CUT_AND_COVER: 0
            },
		}),

			//success msg
			API.ui.showNotification('Hanoi Line 3 loaded successfully', 'success')
    ;

    } catch (error) {
        console.error("Mod init error:", error);
    }
}

console.log("Trains mod loading...");
setTimeout(() => { initMod(); }, 100);
