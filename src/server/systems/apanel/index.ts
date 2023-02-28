import * as rpc from 'rage-rpc'
import { vehicle } from '@/utils/vehicle';
rpc.register('repairVehicle', () => {
    const player = mp.players.at(0);
    if (!player.vehicle) return player.sendToast({type: 'error', message: 'You need to be in a car to repair it'})
    player.vehicle.repair();
    player.sendToast({type: 'success', message: 'Vehicle repaired successfully'})
})

rpc.register('vehicleSpawn0', () => {
    const player = mp.players.at(0);
    if (player.vehicle) {
        player.vehicle.destroy()
    }
    const createdCar: VehicleMp = mp.vehicles.new(mp.joaat(vehicle.ferrari), player.position,
        {
            heading: player.heading,
            numberPlate: 'STAFF',
            dimension: player.dimension
        });
    player.putIntoVehicle(createdCar, 0)
    player.sendToast({type: 'success', message: 'Vehicle spawned successfully'})

})
rpc.register('vehicleSpawn1', () => {
    const player = mp.players.at(0);
    if (player.vehicle) {
        player.vehicle.destroy()
    }
    const createdCar: VehicleMp = mp.vehicles.new(mp.joaat(vehicle.mercedes), player.position,
        {
            heading: player.heading,
            numberPlate: 'STAFF',
            dimension: player.dimension
        });
    player.putIntoVehicle(createdCar, 0)
    player.sendToast({type: 'success', message: 'Vehicle spawned successfully'})

})
rpc.register('vehicleSpawn2', () => {
    const player = mp.players.at(0);
    if (player.vehicle) {
        player.vehicle.destroy()
    }
    const createdCar: VehicleMp = mp.vehicles.new(mp.joaat(vehicle.bugatti), player.position,
        {
            heading: player.heading,
            numberPlate: 'STAFF',
            dimension: player.dimension
        });
    player.putIntoVehicle(createdCar, 0)
    player.sendToast({type: 'success', message: 'Vehicle spawned successfully'})

})