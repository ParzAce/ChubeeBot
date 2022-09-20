const Discord = require("discord.js")
const fetch = require("node-fetch")



const traitDescription = async (trait) => {
    const api_url = 'https://temtem-api.mael.tech/api/traits'
    let result = await fetch(url)
    try { result = await result.json(); } catch (err) { result = null }
    let traitDes = 0

    for (item in result) {
        if (trait.toLowerCase === item.name.toLowerCase()) {
            traitDes = item.effect
        }
    }

    return traitDes
}

module.exports = traitDescription