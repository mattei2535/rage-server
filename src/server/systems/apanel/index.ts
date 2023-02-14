import * as rpc from 'rage-rpc'

rpc.register('vehicleSpawn', () => {
    const player = mp.players.at(0);
    const car = mp.vehicles.new(0xEEA75E63, player.position,
        {
            heading: player.heading,
            numberPlate: 'ASDF',
            dimension: player.dimension
        });
    player.putIntoVehicle(car, 0)
    player.sendToast({type: 'success', message: 'Vehicle spawned successfully'})
})