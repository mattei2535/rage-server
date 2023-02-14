import * as rpc from 'rage-rpc'

rpc.register('showCursor', () => {
    mp.gui.cursor.show(true, true)
})

rpc.register('hideCursor', () => {
    mp.gui.cursor.show(false, false)
})