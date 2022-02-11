module.exports = {
    name: 'ready',
    run: async (bot) => {
        console.log('Chubee is online!');
        bot.client.user.setActivity('your prayers', { type: 'LISTENING' });
    }
}