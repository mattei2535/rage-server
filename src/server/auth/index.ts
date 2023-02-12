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
    
        if(alreadyUser?.username == username) return console.log('alreadyexists')
        if(alreadyMail?.email == email) return console.log('emailalreadyexist')

        Account.create({username: username, email: email, password: password});
        console.log(`New account was created with data: ${username},${email},${password}`);

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
    }
    else return console.log('User sau Parola gresita')

})