import * as rpc from 'rage-rpc';
const player = mp.players.local
const playerName = mp.players.local.name

rpc.register('mti:authSystem', () => {
        setTimeout(() => {
                mp.gui.cursor.show(true, true)
                player.freezePosition(true)
                player.setInvincible(true)
                mp.discord.update(`mtw's project`, `Logging in..`)
        }, 100)

});

rpc.register('loginAuthorization', () => {
        setTimeout(() => {
                mp.gui.cursor.show(false, false)
                player.freezePosition(false)
                player.setInvincible(false)
                mp.discord.update(`mtw's project`, `${playerName}`)
        }, 100)
        rpc.triggerBrowsers('loginAuthorization')
        
});





    
