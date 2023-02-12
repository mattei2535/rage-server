import * as rpc from 'rage-rpc'

mp.Player.prototype.sendToast = function sendToast({type, message}:{type: "success" | "warning" | "info" | "error", message: string}) {
    rpc.triggerBrowsers(this, 'sendToast', ({type, message}))
}