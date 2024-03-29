const Discord = require("discord.js")
const fetch = require("node-fetch")


const emotes = {
    neutral: '<:neutral:1020721102508527631>',
    fire: '<:fire:1020721097857048586>',
    water: '<:water:1020721103762628769>',
    nature: '<:nature:1020721099538976860>',
    electric: '<:electric:1020721098863681616>',
    earth: '<:earth:1020721100625293333>',
    mental: '<:mental:1020721107495571497>',
    wind: '<:wind:1020721104513404940>',
    digital: '<:digital:1020721101661286513>',
    melee: '<:melee:1020721105591349268>',
    crystal: '<:crystal:1020721107961135187>',
    toxic: '<:toxic:1020721106568613888>',
    attack: '<:atk:1020721110431580181>',
    defense: '<:def:1020721111341740034>',
    health: '<:hp:1020721113778630676>',
    specialAttack: '<:specatk:1020721109341057165>',
    specialDefense: '<:specdef:1020721115129200771>',
    speed: '<:speed:1020721116144205875>',
    stamina: '<:stam:1020721112637784134>'
}


const temtem = async (temtemName) => {
    const api_url = 'https://temtem-api.mael.tech/api/temtems'
    let result = await fetch(`https://temtem-api.mael.tech/api/temtems/${temtemName}`)
    try { result = await result.json(); } catch (err) { result = null }

    const temtem = result


    // getting type and weaknesses
    let types = ""
    let amountoftypes = 0
    let weak = {
        "crystal":0,
        "digital": 0,
        "earth": 0,
        "electric": 0,
        "fire": 0,
        "melee": 0,
        "mental": 0,
        "nature": 0,
        "neutral": 0,
        "toxic": 0,
        "water": 0,
        "wind": 0
    }
    let color
    let emote

    temtem.types.forEach((type) => {
        
        amountoftypes ++
        //get multipliers
        if (amountoftypes === 1) {
            switch (type.toLowerCase()) {
                case "neutral":
                    emote = emotes.neutral
                    color = "#E6F7F7"
                    weak["mental"] += 1 || 1
                    break
                case "fire":
                    emote = emotes.fire
                    color = "#E85C4E"
                    weak["earth"] += 1 || 1
                    weak["water"] += 1 || 1
                    weak["crystal"] -= 1 || -1
                    weak["fire"] -= 1 || -1
                    weak["nature"] -= 1 || -1
                    break
                case "nature":
                    emote = emotes.nature
                    color = "#ADDE77"
                    weak["fire"] += 1 || 1
                    weak["toxic"] += 1 || 1
                    weak["earth"] -= 1 || -1
                    weak["electric"] -= 1 || -1
                    weak["nature"] -= 1 || -1
                    weak["water"] -= 1 || -1
                    break
                case "water":
                    emote = emotes.water
                    color = "#45CBFF"
                    weak["electric"] += 1 || 1
                    weak["toxic"] += 1 || 1
                    weak["nature"] += 1 || 1
                    weak["earth"] -= 1 || -1
                    weak["fire"] -= 1 || -1
                    weak["water"] -= 1 || -1
                    break
                case "electric":
                    emote = emotes.electric
                    color = "#FFE174"
                    weak["crystal"] += 1 || 1
                    weak["earth"] += 1 || 1
                    weak["electric"] -= 1 || -1
                    weak["wind"] -= 1 || -1
                    break
                case "mental":
                    emote = emotes.mental
                    color = "#C369A3"
                    weak["crystal"] += 1 || 1
                    weak["digital"] += 1 || 1
                    weak["electric"] += 1 || 1
                    weak["neutral"] -= 1 || -1
                    weak["melee"] -= 1 || -1
                    break
                case "earth":
                    emote = emotes.earth
                    color = "#BA795C"
                    weak["melee"] += 1 || 1
                    weak["nature"] += 1 || 1
                    weak["water"] += 1 || 1
                    weak["crystal"] -= 1 || -1
                    weak["fire"] -= 1 || -1
                    weak["toxic"] -= 1 || -1
                    weak["electric"] -= 1 || -1
                    break
                case "wind":
                    emote = emotes.wind
                    color = "#08FAB3"
                    weak["electric"] += 1 || 1
                    weak["earth"] -= 1 || -1
                    weak["wind"] -= 1 || -1
                    break
                case "crystal":
                    emote = emotes.crystal
                    color = "#EA4A68"
                    weak["melee"] += 1 || 1
                    weak["fire"] += 1 || 1
                    weak["earth"] += 1 || 1
                    weak["electric"] -= 1 || -1
                    weak["mental"] -= 1 || -1
                    weak["toxic"] -= 1 || -1
                    break
                case "digital":
                    emote = emotes.digital
                    color = "#A4C0C1"
                    weak["digital"] += 1 || 1
                    weak["electric"] += 1 || 1
                    weak["water"] += 1 || 1
                    weak["toxic"] -= 1 || -1
                    break
                case "melee":
                    emote = emotes.melee
                    color = "#FA9260"
                    weak["digital"] += 1 || 1
                    weak["mental"] += 1 || 1
                    weak["melee"] -= 1 || -1
                    break
                case "toxic":
                    emote = emotes.toxic
                    color = "#5C565C"
                    weak["wind"] += 1 || 1
                    weak["nature"] -= 1 || -1
                    weak["water"] -= 1 || -1
                    weak["toxic"] -= 1 || -1
                    break
                default:
            } 
        } else {
            types += `,\n`
            switch (type.toLowerCase()) {
                case "neutral":
                    emote = emotes.neutral
                    weak["mental"] += 1 || 1
                    break
                case "fire":
                    emote = emotes.fire
                    weak["earth"] += 1 || 1
                    weak["water"] += 1 || 1
                    weak["crystal"] -= 1 || -1
                    weak["fire"] -= 1 || -1
                    weak["nature"] -= 1 || -1
                    break
                case "nature":
                    emote = emotes.nature
                    weak["fire"] += 1 || 1
                    weak["toxic"] += 1 || 1
                    weak["earth"] -= 1 || -1
                    weak["electric"] -= 1 || -1
                    weak["nature"] -= 1 || -1
                    weak["water"] -= 1 || -1
                    break
                case "water":
                    emote = emotes.water
                    weak["electric"] += 1 || 1
                    weak["toxic"] += 1 || 1
                    weak["nature"] += 1 || 1
                    weak["earth"] -= 1 || -1
                    weak["fire"] -= 1 || -1
                    weak["water"] -= 1 || -1
                    break
                case "electric":
                    emote = emotes.electric
                    weak["crystal"] += 1 || 1
                    weak["earth"] += 1 || 1
                    weak["electric"] -= 1 || -1
                    weak["wind"] -= 1 || -1
                    break
                case "mental":
                    emote = emotes.mental
                    weak["crystal"] += 1 || 1
                    weak["digital"] += 1 || 1
                    weak["electric"] += 1 || 1
                    weak["neutral"] -= 1 || -1
                    weak["melee"] -= 1 || -1
                    break
                case "earth":
                    emote = emotes.earth
                    weak["melee"] += 1 || 1
                    weak["nature"] += 1 || 1
                    weak["water"] += 1 || 1
                    weak["crystal"] -= 1 || -1
                    weak["electric"] -= 1 || -1
                    weak["fire"] -= 1 || -1
                    weak["toxic"] -= 1 || -1
                    break
                case "wind":
                    emote = emotes.wind
                    weak["electric"] += 1 || 1
                    weak["earth"] -= 1 || -1
                    weak["wind"] -= 1 || -1
                    break
                case "crystal":
                    emote = emotes.crystal
                    weak["melee"] += 1 || 1
                    weak["fire"] += 1 || 1
                    weak["earth"] += 1 || 1
                    weak["electric"] -= 1 || -1
                    weak["mental"] -= 1 || -1
                    weak["toxic"] -= 1 || -1
                    break
                case "digital":
                    emote = emotes.digital
                    weak["digital"] += 1 || 1
                    weak["electric"] += 1 || 1
                    weak["water"] += 1 || 1
                    weak["toxic"] -= 1 || -1
                    break
                case "melee":
                    emote = emotes.melee
                    weak["digital"] += 1 || 1
                    weak["mental"] += 1 || 1
                    weak["melee"] -= 1 || -1
                    break
                case "toxic":
                    emote = emotes.toxic
                    weak["wind"] += 1 || 1
                    weak["nature"] -= 1 || -1
                    weak["water"] -= 1 || -1
                    weak["toxic"] -= 1 || -1
                    break
                default:
            }
        }
        types += `${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} ${emote}`
    });

    
    // weaknesses strings
    let weaknesses = ""
    let resistances = ""
    const elementsSorted = []
        for (let element in weak) {
            elementsSorted.push({ name: element, amount: weak[element] })
        }


        elementsSorted.sort(function (a, b) {
            return b.amount - a.amount;
        })

        //calc weaknesses
        for (element in elementsSorted) {
            element = elementsSorted[element]
            if (element.amount > 0) {
                weaknesses += `${emotes[element.name]} ${element.amount === 2 ? '**' : ''}${element.name.charAt(0).toUpperCase()}${element.name.slice(1).toLowerCase()} (${Math.pow(2, element.amount)}x)${element.amount === 2 ? '**' : ''},\n`
            } else if (element.amount < 0) {
                resistances += `${emotes[element.name]} ${element.amount === -2 ? '**' : ''}${element.name.charAt(0).toUpperCase()}${element.name.slice(1).toLowerCase()} (${Math.pow(2, element.amount)}x)${element.amount === -2 ? '**' : ''},\n`
            }
        }

        if (resistances === "") {
            resistances = "None"
        }

     //getting the traits
     let traits = ""
     if (temtem.traits) {
         temtem.traits.forEach((trait) => {
             traits += `${trait}\n`
         })
     }

     // making the embed
     let id = temtem.number
     let description = temtem.gameDescription
     if (description.length > 2000) {
        description = temtem.description.slice(0, 2000) + "..."
     }

     let genderRatio = 'Male: ' + temtem.genderRatio.male + '% <:8757male:1020905341157900318>\n' + 'Female: ' + temtem.genderRatio.female + '% <:7085female:1020905340251930644>'

    let wikiUrl = temtem.wikiUrl
     if (id < 10) id = `00${id}`
     else if (id < 100) id = `0${id}`
     const embed = new Discord.MessageEmbed()
         .setTitle(temtem.name + ' (ID:' + id + ')')
         .setURL(wikiUrl)
         .setThumbnail(temtem.wikiRenderStaticUrl)
         .setColor(color)
         .setDescription(description)
         //.addField("temtem-tv-yield", temtem.tvYields)
         .addField("Type(s)", types, true)
         .addField("Resistances", resistances, true)
         .addField("Weaknesses", weaknesses, true)
         //.addField("temtem-resistant-against", resistances)
         //.addField("temtem-weak-against", weaknesses)
         .addField("Traits", traits, true)
         .addField("Gender Ratio", genderRatio, true)
         .addField("Catch Rate", `${temtem.catchRate}`, true)
         .addField(`\u200b`, "\u200b")
         .addField("Health " + emotes.health, `${temtem.stats.hp}`, true)
         .addField("Stamina " +emotes.stamina, `${temtem.stats.sta}`, true)
         .addField("Speed " +emotes.speed, `${temtem.stats.spd}`, true)
         .addField("Attack " +emotes.attack, `${temtem.stats.atk}`, true)
         .addField("Defense " +emotes.defense, `${temtem.stats.def}`, true)
         .addField("Special Attack " +emotes.specialAttack, `${temtem.stats.spatk}`, true)
         .addField("Special Defense " +emotes.specialDefense, `${temtem.stats.spdef}`, true)

     return embed
 }

module.exports = temtem