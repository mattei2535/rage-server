import * as rpc from 'rage-rpc';

rpc.register('mti:authSystem', () => {
        mp.gui.cursor.show(true, true)
        rpc.triggerBrowsers('mti:authSystem');
});

rpc.register('loginAuthorization', () => {
        rpc.triggerBrowsers('loginAuthorization')
})





    
