const Discord = require("discord.js")
const fetch = require("node-fetch")


const moveset = async (temtemName) => {
    const api_url = 'https://temtem-api.mael.tech/api/temtems'
    let result = await fetch(`https://temtem-api.mael.tech/api/temtems/${temtemName}`)
    try { result = await result.json(); } catch (err) { result = null }

    const temtem = result




    //make string for moveset

    let movesetString = ""

    temtem.techniques.forEach((move) => {
        movesetString += '**' + move.name + '**            Learned by ' + move.source
        if (move.source === 'Breeding') {
            movesetString += ' <:breedingegg:1020898475174531144>\n'
        } else if (move.source === 'TechniqueCourses') {
            movesetString += ' <:alert:1020898472905425007>\n'
        } else {
            movesetString += ' at level ' + move.levels +' <:updoot:1020898473614245979>\n'
        }
    })


    let wikiUrl = temtem.wikiUrl.substring(0, 14) + '.wiki.gg/' + temtem.wikiUrl.substring(29)
    let id = temtem.number
    const embed = new Discord.MessageEmbed()
         .setTitle(temtem.name + ' (ID:' + id + ')')
         .setURL(wikiUrl)
         .setThumbnail(temtem.wikiRenderStaticUrl)
         .setDescription('**Moveset**\n\n' + movesetString)
         
         



    return embed
}

module.exports = moveset