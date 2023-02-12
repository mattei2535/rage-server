import * as rpc from 'rage-rpc';
const player = mp.players.local

rpc.register('mti:authSystem', () => {
        mp.gui.cursor.show(true, true)
        player.freezePosition(true)
        player.setInvincible(true)

        rpc.triggerBrowsers('mti:authSystem');
});

rpc.register('loginAuthorization', () => {
        setTimeout(() => {
                mp.gui.cursor.show(false, false)
                player.freezePosition(false)
                player.setInvincible(false)
        }, 100)
        rpc.triggerBrowsers('loginAuthorization')
        
});





    
