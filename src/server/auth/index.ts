import * as rpc from 'rage-rpc'


mp.events.add('playerReady', (player: PlayerMp) => {
    player.model = mp.joaat('player_zero');
    player.spawn(new mp.Vector3(-425.517, 1123.620, 325.8544));
    rpc.callClient(player, 'mti:authSystem')
})
