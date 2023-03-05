import { Account } from '@/database/schemes';
import * as rpc from 'rage-rpc'



mp.events.add('playerReady', async (player: PlayerMp) => {
    player.model = mp.joaat('player_zero');
    player.spawn(new mp.Vector3(-425.517, 1123.620, 325.8543));
    player.dimension = player.id + 1;
    rpc.callClient(player, 'mti:authSystem')

})

rpc.register('registerInfos', async ({username, email, password}) => {
    try {
        const alreadyUser = await Account.findOne({username: username}).exec()
        const alreadyMail = await Account.findOne({email: email})

        const player = mp.players.at(0);
        if(alreadyUser?.username == username) return player.sendToast({type: "error", message: "The username already exists!"})
        if(alreadyMail?.email == email) return player.sendToast({type: "error", message: "The email address already exists!"})
        if(username == '' || email == '' || password == '')  return player.sendToast({type: "error", message: "You cant register a account with an empty field!"})

        Account.create({username: username, email: email, password: password});
        player.sendToast({type: "success", message: "You have successffully registered, you can log in now!"})

    } catch (e) {
        console.log(`[!] Account registering error: ${e}`)
    }
})

rpc.register('checkLoginData', async ({username, password}) => {
    const User = await Account.findOne({username: username})
    const player = mp.players.at(0);
    if (User && User.password == password) {
        rpc.callClient(player, 'loginAuthorization')
        player.dimension = 0;
        player.username = username;
        player.money = User.money
        rpc.triggerBrowsers(player, 'playerInfos', {money: player.money, nick: username, id: player.id})
        player.sendToast({type: "success", message: `Logged successfuly!`})
    }
    else return player.sendToast({type: "error", message: "Incorrect username or password!"})

})