import * as rpc from 'rage-rpc';

rpc.register('mti:authSystem', () => {
        mp.gui.cursor.show(true, true)
        rpc.triggerBrowsers('mti:authSystem');
});

rpc.register('loginAuthorization', () => {
        setTimeout(() => {
                mp.gui.cursor.show(false, false)
        }, 100)
        rpc.triggerBrowsers('loginAuthorization')
        
});





    
