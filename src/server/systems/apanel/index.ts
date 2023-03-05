import * as rpc from 'rage-rpc'
import { vehicle } from '@/utils/vehicle';
rpc.register('repairVehicle', () => {
    const player = mp.players.at(0);
    if (!player.vehicle) return player.sendToast({type: 'error', message: 'You need to be in a car to repair it'})
    player.vehicle.repair();
    player.sendToast({type: 'success', message: 'Vehicle repaired successfully'})
})

rpc.register('vehicleSpawn', (model) => {
    const player = mp.players.at(0);
    if (player.vehicle) {
        player.vehicle.destroy()
    }
    // @ts-ignore
    const createdCar: VehicleMp = mp.vehicles.new(mp.joaat(vehicle[model]), new mp.Vector3(player.position.x, player.position.y + 2, player.position.z),
        {
            heading: player.heading,
            numberPlate: 'STAFF',
            dimension: player.dimension
        });
    player.putIntoVehicle(createdCar, 0)
    player.sendToast({type: 'success', message: 'Vehicle spawned successfully'})

})
