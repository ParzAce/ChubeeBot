const Discord = require("discord.js")

const temtemNameGen = (temtemName) => {
    var returnValue = 0
    const temArray = [
                    {
                        name: 'Mimit',
                        value: '1',
                    },
                    {
                        name: 'Oree',
                        value: '2',
                    },
                    {
                        name: 'Zaobian',
                        value: '3',
                    },
                    {
                        name: 'Chromeon',
                        value: '4',
                    },
                    {
                        name: 'Halzhi',
                        value: '5',
                    },
                    {
                        name: 'Molgu',
                        value: '6',
                    },
                    {
                        name: 'Platypet',
                        value: '7',
                    },
                    {
                        name: 'Platox',
                        value: '8',
                    },
                    {
                        name: 'Platimous',
                        value: '9',
                    },
                    {
                        name: 'Swali',
                        value: '10',
                    },
                    {
                        name: 'Loali',
                        value: '11',
                    },
                    {
                        name: 'Tateru',
                        value: '12',
                    },
                    {
                        name: 'Gharunder',
                        value: '13',
                    },
                    {
                        name: 'Mosu',
                        value: '14',
                    },
                    {
                        name: 'Magmut',
                        value: '15',
                    },
                    {
                        name: 'Paharo',
                        value: '16',
                    },
                    {
                        name: 'Paharac',
                        value: '17',
                    },
                    {
                        name: 'Granpah',
                        value: '18',
                    },
                    {
                        name: 'Ampling',
                        value: '19',
                    },
                    {
                        name: 'Amphatyr',
                        value: '20',
                    },
                    {
                        name: 'Bunbun',
                        value: '21',
                    },
                    {
                        name: 'Mudrid',
                        value: '22',
                    },
                    {
                        name: 'Hidody',
                        value: '23',
                    },
                    {
                        name: 'Taifu',
                        value: '24',
                    },
                    {
                        name: 'Fomu',
                        value: '25',
                    },
                    {
                        name: 'Wiplump',
                        value: '26',
                    },
                    {
                        name: 'Skail',
                        value: '27',
                    },
                    {
                        name: 'Skunch',
                        value: '28',
                    },
                    {
                        name: 'Goty',
                        value: '29',
                    },
                    {
                        name: 'Mouflank',
                        value: '30',
                    },
                    {
                        name: 'Rhoulder',
                        value: '31',
                    },
                    {
                        name: 'Houchic',
                        value: '32',
                    },
                    {
                        name: 'Tental',
                        value: '33',
                    },
                    {
                        name: 'Nagaise',
                        value: '34',
                    },
                    {
                        name: 'Orphyll',
                        value: '35',
                    },
                    {
                        name: 'Nidrasil',
                        value: '36',
                    },
                    {
                        name: 'Banapi',
                        value: '37',
                    },
                    {
                        name: 'Capyre',
                        value: '38',
                    },
                    {
                        name: 'Lapinite',
                        value: '39',
                    },
                    {
                        name: 'Azuroc',
                        value: '40',
                    },
                    {
                        name: 'Zenoreth',
                        value: '41',
                    },
                    {
                        name: 'Reval',
                        value: '42',
                    },
                    {
                        name: 'Aohi',
                        value: '43',
                    },
                    {
                        name: 'Bigu',
                        value: '44',
                    },
                    {
                        name: 'Babawa',
                        value: '45',
                    },
                    {
                        name: '0b1',
                        value: '46',
                    },
                    {
                        name: '0b10',
                        value: '47',
                    },
                    {
                        name: 'Kaku',
                        value: '48',
                    },
                    {
                        name: 'Saku',
                        value: '49',
                    },
                    {
                        name: 'Valash',
                        value: '50',
                    },
                    {
                        name: 'Towly',
                        value: '51',
                    },
                    {
                        name: 'Owlhe',
                        value: '52',
                    },
                    {
                        name: 'Barnshe',
                        value: '53',
                    },
                    {
                        name: 'Gyalis',
                        value: '54',
                    },
                    {
                        name: 'Occlura',
                        value: '55',
                    },
                    {
                        name: 'Myx',
                        value: '56',
                    },
                    {
                        name: 'Raiber',
                        value: '57',
                    },
                    {
                        name: 'Raize',
                        value: '58',
                    },
                    {
                        name: 'Raican',
                        value: '59',
                    },
                    {
                        name: 'Pewki',
                        value: '60',
                    },
                    {
                        name: 'Piraniant',
                        value: '61',
                    },
                    {
                        name: 'Scarawatt',
                        value: '62',
                    },
                    {
                        name: 'Scaravolt',
                        value: '63',
                    },
                    {
                        name: 'Hoglip',
                        value: '64',
                    },
                    {
                        name: 'Hedgine',
                        value: '65',
                    },
                    {
                        name: 'Osuchi',
                        value: '66',
                    },
                    {
                        name: 'Osukan',
                        value: '67',
                    },
                    {
                        name: 'Osukai',
                        value: '68',
                    },
                    {
                        name: 'Saipat',
                        value: '69',
                    },
                    {
                        name: 'Pycko',
                        value: '70',
                    },
                    {
                        name: 'Drakash',
                        value: '71',
                    },
                    {
                        name: 'Crystle',
                        value: '72',
                    },
                    {
                        name: 'Sherald',
                        value: '73',
                    },
                    {
                        name: 'Tortenite',
                        value: '74',
                    },
                    {
                        name: 'Innki',
                        value: '75',
                    },
                    {
                        name: 'Shaolite',
                        value: '76',
                    },
                    {
                        name: 'Shaolant',
                        value: '77',
                    },
                    {
                        name: 'Cycrox',
                        value: '78',
                    },
                    {
                        name: 'Hocus',
                        value: '79',
                    },
                    {
                        name: 'Pocus',
                        value: '80',
                    },
                    {
                        name: 'Smolzy',
                        value: '81',
                    },
                    {
                        name: 'Sparzy',
                        value: '82',
                    },
                    {
                        name: 'Golzy',
                        value: '83',
                    },
                    {
                        name: 'Mushi',
                        value: '84',
                    },
                    {
                        name: 'Mushook',
                        value: '85',
                    },
                    {
                        name: 'Magmis',
                        value: '86',
                    },
                    {
                        name: 'Mastione',
                        value: '87',
                    },
                    {
                        name: 'Umishi',
                        value: '88',
                    },
                    {
                        name: 'Ukama',
                        value: '89',
                    },
                    {
                        name: 'Galvanid',
                        value: '90',
                    },
                    {
                        name: 'Raignet',
                        value: '91',
                    },
                    {
                        name: 'Smazee',
                        value: '92',
                    },
                    {
                        name: 'Baboong',
                        value: '93',
                    },
                    {
                        name: 'Seismunch',
                        value: '94',
                    },
                    {
                        name: 'Zizare',
                        value: '95',
                    },
                    {
                        name: 'Gorong',
                        value: '96',
                    },
                    {
                        name: 'Mitty',
                        value: '97',
                    },
                    {
                        name: 'Sanbi',
                        value: '98',
                    },
                    {
                        name: 'Momo',
                        value: '99',
                    },
                    {
                        name: 'Kuri',
                        value: '100',
                    },
                    {
                        name: 'Kauren',
                        value: '101',
                    },
                    {
                        name: 'Spriole',
                        value: '102',
                    },
                    {
                        name: 'Deendre',
                        value: '103',
                    },
                    {
                        name: 'Cerneaf',
                        value: '104',
                    },
                    {
                        name: 'Toxolotl',
                        value: '105',
                    },
                    {
                        name: 'Noxolotl',
                        value: '106',
                    },
                    {
                        name: 'Blooze',
                        value: '107',
                    },
                    {
                        name: 'Goolder',
                        value: '108',
                    },
                    {
                        name: 'Zephyruff',
                        value: '109',
                    },
                    {
                        name: 'Volarend',
                        value: '110',
                    },
                    {
                        name: 'Grumvel',
                        value: '111',
                    },
                    {
                        name: 'Grumper',
                        value: '112',
                    },
                    {
                        name: 'Ganki',
                        value: '113',
                    },
                    {
                        name: 'Gazuma',
                        value: '114',
                    },
                    {
                        name: 'Oceara',
                        value: '115',
                    },
                    {
                        name: 'Yowlar',
                        value: '116',
                    },
                    {
                        name: 'Droply',
                        value: '117',
                    },
                    {
                        name: 'Garyo',
                        value: '118',
                    },
                    {
                        name: 'Broccoblin',
                        value: '119',
                    },
                    {
                        name: 'Broccorc',
                        value: '120',
                    },
                    {
                        name: 'Broccolem',
                        value: '121',
                    },
                    {
                        name: 'Shuine',
                        value: '122',
                    },
                    {
                        name: 'Nessla',
                        value: '123',
                    },
                    {
                        name: 'Valiar',
                        value: '124',
                    },
                    {
                        name: 'Pupoise',
                        value: '125',
                    },
                    {
                        name: 'Loatle',
                        value: '126',
                    },
                    {
                        name: 'Kalazu',
                        value: '127',
                    },
                    {
                        name: 'Kalabyss',
                        value: '128',
                    },
                    {
                        name: 'Adoroboros',
                        value: '129',
                    },
                    {
                        name: 'Tuwai',
                        value: '130',
                    },
                    {
                        name: 'Tukai',
                        value: '131',
                    },
                    {
                        name: 'Tulcan',
                        value: '132',
                    },
                    {
                        name: 'Tuvine',
                        value: '133',
                    },
                    {
                        name: 'Turoc',
                        value: '134',
                    },
                    {
                        name: 'Tuwire',
                        value: '135',
                    },
                    {
                        name: 'Tutsu',
                        value: '136',
                    },
                    {
                        name: 'Kinu',
                        value: '137',
                    },
                    {
                        name: 'Vulvir',
                        value: '138',
                    },
                    {
                        name: 'Vulor',
                        value: '139',
                    },
                    {
                        name: 'Vulcrane',
                        value: '140',
                    },
                    {
                        name: 'Pigepic',
                        value: '141',
                    },
                    {
                        name: 'Akranox',
                        value: '142',
                    },
                    {
                        name: 'Koish',
                        value: '143',
                    },
                    {
                        name: 'Vulffy',
                        value: '144',
                    },
                    {
                        name: 'Chubee',
                        value: '145',
                    },
                    {
                        name: 'Waspeen',
                        value: '146',
                    },
                    {
                        name: 'Mawtle',
                        value: '147',
                    },
                    {
                        name: 'Mawmense',
                        value: '148',
                    },
                    {
                        name: 'Hazrat',
                        value: '149',
                    },
                    {
                        name: 'Minttle',
                        value: '150',
                    },
                    {
                        name: 'Minox',
                        value: '151',
                    },
                    {
                        name: 'Minothor',
                        value: '152',
                    },
                    {
                        name: 'Maoala',
                        value: '153',
                    },
                    {
                        name: 'Venx',
                        value: '154',
                    },
                    {
                        name: 'Venmet',
                        value: '155',
                    },
                    {
                        name: 'Vental',
                        value: '156',
                    },
                    {
                        name: 'Chimurian',
                        value: '157',
                    },
                    {
                        name: 'Arachnyte',
                        value: '158',
                    },
                    {
                        name: 'Thaiko',
                        value: '159',
                    },
                    {
                        name: 'Monkko',
                        value: '160',
                    },
                    {
                        name: 'Anahir',
                        value: '161',
                    },
                    {
                        name: 'Anatan',
                        value: '162',
                    },
                    {
                        name: 'Tyranak',
                        value: '163',
                    },
                    {
                        name: 'Volgon',
                        value: '164',
                    },
                    
                ]
    for (tem of temArray) {
        if (temtemName.toLowerCase() === tem.name.toLowerCase()) {
            returnValue = tem.value
        }
    }
    return returnValue
}

module.exports = temtemNameGen