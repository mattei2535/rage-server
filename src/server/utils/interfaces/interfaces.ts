import * as rpc from 'rage-rpc'

rpc.register('interfaceIsOpen', () => {
    const player = mp.players.at(0)
    rpc.callClient(player, 'showCursor')
})

rpc.register('interfaceIsClosed', () => {
    const player = mp.players.at(0)
    rpc.callClient(player, 'hideCursor')
})