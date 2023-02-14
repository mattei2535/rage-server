import * as rpc from 'rage-rpc'

rpc.register('repairVehicle', () => {
    const player = mp.players.at(0);
    if (!player.vehicle) return player.sendToast({type: 'error', message: 'You need to be in a car to repair it'})
    player.vehicle.repair();
    player.sendToast({type: 'success', message: 'Vehicle repaired successfully'})
})

rpc.register('vehicleSpawn', () => {
    const player = mp.players.at(0);
    const car = mp.vehicles.new(0xEEA75E63, player.position,
        {
            heading: player.heading,
            numberPlate: 'ASDF',
            dimension: player.dimension
        });
    if (player.vehicle) {
        player.vehicle.destroy()
    }
    player.putIntoVehicle(car, 0)
    player.sendToast({type: 'success', message: 'Vehicle spawned successfully'})

})