import * as rpc from 'rage-rpc'
import { vehicle } from '@/utils/vehicle';


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
    rpc.callClient(player, 'hideCursor')
    player.sendToast({type: 'success', message: 'Mașina a fost creată cu succes'})

})

mp.events.addCommand('veh', (player: PlayerMp) => {
    rpc.triggerBrowsers(player, 'cmd:Veh')
    
})

mp.events.addCommand('fv', (player: PlayerMp) => {
    if (!player.vehicle) return player.sendToast({type: 'error', message: 'Trebuie să fi într-o mașină ca să o poți repara'})
    player.vehicle.repair();
    player.sendToast({type: 'success', message: 'Mașina a fost reparată cu succes'})
})

mp.events.addCommand('dv', (player: PlayerMp) => {
    if (!player.vehicle) return player.sendToast({type: 'error', message: 'Trebuie să fi într-o mașină ca să o poți șterge'})
    player.vehicle.destroy()
    player.sendToast({type: 'success', message: 'Mașina a fost ștearsă cu succes'})
})