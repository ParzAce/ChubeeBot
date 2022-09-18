const Discord = require("discord.js");
const moment = require("moment")


const dojoTimes = () => {


    //find current time and then put it in the YYYY-MM-DD HH:mm:ss format
   
    var date_ob = new Date();
    var day = ("0" + date_ob.getDate()).slice(-2);
    var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    var year = date_ob.getFullYear();
   
    
    var hours = date_ob.getHours();
    
    var denizDay = day
    var omniDay = day
    var tucmaDay = day
    var kisiwaDay = day
    var cipankuDay = day
    var arburyDay = day

    if (hours > 8) {
        denizDay = ("0" + (date_ob.getDate() + 1)).slice(-2)
    }

    if (hours > 12) {
        omniDay = ("0" + (date_ob.getDate() + 1)).slice(-2)
    }

    if (hours > 16) {
        tucmaDay = ("0" + (date_ob.getDate() + 1)).slice(-2)
    }

    if (hours > 20) {
        kisiwaDay = ("0" + (date_ob.getDate() + 1)).slice(-2)
    }

    if (hours > 24) {
        cipankuDay = ("0" + (date_ob.getDate() + 1)).slice(-2)
    }

    if (hours > 4) {
        arburyDay = ("0" + (date_ob.getDate() + 1)).slice(-2)
    }


    var denizDT = year + "-" + month + "-" + denizDay + " " + 8 + ":" + "00" + ":" + "00"
    var omniDT = year + "-" + month + "-" + omniDay + " " + 12 + ":" + "00" + ":" + "00"
    var tucmaDT = year + "-" + month + "-" + tucmaDay + " " + 16 + ":" + "00" + ":" + "00"
    var kisiwaDT = year + "-" + month + "-" + kisiwaDay + " " + 20 + ":" + "00" + ":" + "00"
    var cipankuDT = year + "-" + month + "-" + cipankuDay + " " + 24 + ":" + "00" + ":" + "00"
    var arburyDT = year + "-" + month + "-" + arburyDay + " " + 4 + ":" + "00" + ":" + "00"


    //get unix for each island
    const deniz = moment(denizDT, 'YYYY-MM-DD HH:mm:ss').unix()
    const omni = moment(omniDT, 'YYYY-MM-DD HH:mm:ss').unix()
    const tucma = moment(tucmaDT, 'YYYY-MM-DD HH:mm:ss').unix()
    const kisiwa = moment(kisiwaDT, 'YYYY-MM-DD HH:mm:ss').unix()
    const cipanku = moment(cipankuDT, 'YYYY-MM-DD HH:mm:ss').unix()
    const arbury = moment(arburyDT, 'YYYY-MM-DD HH:mm:ss').unix()

    //create embed to send
    const dojoEmbed = new Discord.MessageEmbed()
            .setColor('#304281').setTitle('Dojo War Times')
            .setThumbnail('https://i.imgur.com/mCnedBW.jpg')
            .addField("Deniz Dojo", "<t:" + deniz + ":T>")
            .addField("Omninesia Dojo", "<t:" + omni + ":T>")
            .addField("Tucma Dojo", "<t:" + tucma + ":T>")
            .addField("Kisiwa Dojo", "<t:" + kisiwa + ":T>")
            .addField("Cipanku Dojo", "<t:" + cipanku + ":T>")
            .addField("Arbury Dojo", "<t:" + arbury + ":T>")

    return dojoEmbed

}

module.exports = dojoTimes