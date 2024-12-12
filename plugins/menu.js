const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "⚡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `╭━━━〔 *Fꫀׁׅܻᥣׁׅ֪ꪱׁׅ᥊ׁׅ* 〕━━━┈⊷
┃★╭──────────────
┃★│ Owner : *Fꫀׁׅܻᥣׁׅ֪ꪱׁׅ᥊ׁׅ*
┃★│ Baileys : *Multi Device*
┃★│ Type : *NodeJs*
┃★│ Platform : *Kyu Batau*
┃★│ Prefix : *[ Multi Prefix ]*
┃★│ Version : *1.0.0 Bᴇᴛᴀ*
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
╭━❮ UPDATE ❯━
┃◆ Use .Menu2 Because Updating Menu
╰━━━━━━━━━━━━⪼

> © Pᨵׁׅᨰׁׅꫀׁׅܻꭈׁׅꫀׁׅܻժׁׅ݊ Bᨮ꫶ׁׅ֮ Fꫀׁׅܻᥣׁׅ֪ꪱׁׅ᥊ׁׅ Bᨵׁׅtׁׅ`

await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/hzagwo.jpg`},caption:dec},{quoted:mek});
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
