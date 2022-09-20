const Discord = require("discord.js")
const fetch = require("node-fetch")



const traitDescription = async (trait) => {
    const api_url = 'https://temtem-api.mael.tech/api/traits'
    let result = await fetch(api_url)
    try { result = await result.json(); } catch (err) { result = null }
    var traitDes = false


    result.forEach((item) => {
        if (trait.toLowerCase() === item.name.toLowerCase()) {
            traitDes = item
        }
    })

    if (traitDes != false) {
        traitDes = new Discord.MessageEmbed()
                .setTitle(traitDes.name)
                .setDescription(traitDes.effect)
                .setURL(traitDes.wikiUrl)
    } else {
        return 0
    }

    return traitDes
}

module.exports = traitDescription