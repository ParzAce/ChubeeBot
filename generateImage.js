const Canvas = require("canvas");
const Discord = require("discord.js");

const welcomeBackground = "./Images/background image.jpg";
const levelBackground = "./Images/levelBackground.jpg";
const dim = {
    height: 810,
    width: 1440,
    margin: 50
}
const av = {
    size: 256,
    x: 600,
    y: 300
}
const generateImage = async (member) => {
    let username = member.user.username;
    let discrim = member.user.discriminator;
    let avatarURL = member.user.displayAvatarURL({format: "png", dynamic: "false", size: av.size});

    const canvas = Canvas.createCanvas(dim.width, dim.height);
    const ctx = canvas.getContext("2d");

    //draw in the background
    const backimg = await Canvas.loadImage(welcomeBackground);
    ctx.drawImage(backimg, 0, 0);

    //draw black tinted box
    ctx.fillStyle = "rgba(0,0,0,0.8)";
    ctx.fillRect(dim.margin, dim.margin, dim.width - 2 *dim.margin, dim.height - 2 *dim.margin);

    const avimg = await Canvas.loadImage(avatarURL);
    ctx.save();
    ctx.beginPath();
    ctx.arc(av.x + av.size / 2, av.y + av.size / 2, av.size / 2, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    ctx.drawImage(avimg, av.x, av.y);
    ctx.restore();

    //write in text
    ctx.fillStyle = "white";
    ctx.textAlign = "center";

    //draw in welcome
    ctx.font = "50px Verdana"
    ctx.fillText("Welcome", dim.width/2, dim.margin + 70);

    //draw in the username
    ctx.font = "60px Verdana";
    ctx.fillText(username + discrim, dim.x/2, dim.height - dim.margin - 125);

    //draw in to the server
    ctx.font = "40px Verdana";
    ctx.fillText("to the server", dim.width/2, dim.height - dim.margin - 50);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png");
    return attachment;
}

const generateLevelImage = async (member) => {
    let username = member.user.username;
    let discrim = member.user.discriminator;
    let avatarURL = member.user.displayAvatarURL({format: "png", dynamic: "false", size: av.size});

    const canvas = Canvas.createCanvas(dim.width, dim.height);
    const ctx = canvas.getContext("2d");

    //draw in the background
    const backimg = await Canvas.loadImage(levelBackground);
    ctx.drawImage(backimg, 0, 0);

    //draw black tinted box
    ctx.fillStyle = "rgba(0,0,0,0.8)";
    ctx.fillRect(dim.margin, dim.margin, dim.width - 2 *dim.margin, dim.height - 2 *dim.margin);

    const avimg = await Canvas.loadImage(avatarURL);
    ctx.save();
    ctx.beginPath();
    ctx.arc(av.x + av.size / 2, av.y + av.size / 2, av.size / 2, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    ctx.drawImage(avimg, av.x, av.y);
    ctx.restore();

    //write in text
    ctx.fillStyle = "white";
    ctx.textAlign = "center";

    //draw in welcome
    ctx.font = "50px Verdana";
    ctx.fillText("Welcome", dim.width/2, dim.margin + 70);

    //draw in the username
    ctx.font = "60px Verdana";
    ctx.fillText(username + discrim, dim.x/2, dim.height - dim.margin - 125);

    //draw in to the server
    ctx.font = "40px Verdana";
    ctx.fillText("to the server", dim.width/2, dim.height - dim.margin - 50);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png");
    return attachment;
}


module.exports = generateLevelImage;
module.exports = generateImage;