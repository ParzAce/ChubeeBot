const Discord = require("discord.js")
const fetch = require("node-fetch")



const traitDescriptions = async (traits) => {
    const api_url = 'https://temtem-api.mael.tech/api/traits'
    let result = await fetch(url)
    try { result = await result.json(); } catch (err) { result = null }
    let traitDes = []

    for (trait in traits) {
        for (items in result) {
            if (trait === items.name) {
                traitDes.append(items.effect)
            }
        }
    }
    return traitDes
}

module.exports = traitDescriptions