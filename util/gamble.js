const Discord = require("discord.js");
const jsonfile = require('jsonfile');
const fs = require('fs');
const random = require('random')



const gamble = () => {
    const odds = random.int((min = 1), (max = 3))
    console.log(odds)
    if (odds === 1) {
        return 0
    } else {
        return 1
    }
}

module.exports = gamble;