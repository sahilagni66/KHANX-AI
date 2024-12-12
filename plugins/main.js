const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "menu2",
    alias: "allmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⚡",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
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
╭━❮ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 ❯━╮
┃◆ .𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔
┃◆ .𝙼𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎
┃◆ .𝙶𝚍𝚛𝚒𝚟𝚎
┃◆ .𝙰𝚙𝚔
┃◆ .𝚃𝚠𝚒𝚝𝚝𝚎𝚛
┃◆ .𝙸𝚗𝚜𝚝𝚊
┃◆ .𝚂𝚘𝚗𝚐
┃◆ .𝚅𝚒𝚍𝚎𝚘
┃◆ .𝚈𝚝𝚖𝚙3
┃◆ .𝙳𝚊𝚛𝚊𝚖𝚊
┃◆ .𝚅𝚒𝚍𝚎𝚘2
┃◆ .𝙿𝚕𝚊𝚢2
┃◆ .𝙰𝚞𝚍𝚒𝚘
┃◆ .𝙿𝚕𝚊𝚢
┃◆ .𝚒𝚖𝚐
┃◆ .𝚊𝚙𝚔
┃◆ .𝚈𝚝𝚖𝚙4
┃◆ .𝚃𝚒𝚔𝚝𝚘𝚔
┃◆ .𝙱𝚊𝚒𝚜𝚌𝚘𝚙𝚎
┃◆ .𝙶𝚒𝚗𝚒𝚂𝚒𝚜𝚒𝚕𝚊
┃◆ .𝚂𝙼𝚘𝚟𝚒𝚎
╰━━━━━━━━━━━━⪼
╭━❮ 𝙶𝚁𝙾𝚄𝙿 ❯━╮
┃◆ .𝙶𝚛𝚘𝚞𝚙𝙻𝚒𝚗𝚔
┃◆ .𝙼𝚞𝚝𝚎
┃◆ .𝚄𝚗𝚖𝚞𝚝𝚎
┃◆ .𝙻𝚎𝚊𝚟𝚎
┃◆ .𝙹𝚘𝚒𝚗
┃◆ .𝚂𝚎𝚝𝙶𝚘𝚘𝚍𝚋𝚢𝚎
┃◆ .𝚂𝚎𝚝𝚠𝚎𝚕𝚌𝚘𝚖𝚎
┃◆ .𝙰𝚍𝚍
┃◆ .𝚁𝚎𝚖𝚘𝚟𝚎
┃◆ .𝙿𝚛𝚘𝚖𝚘𝚝𝚎
┃◆ .𝙳𝚎𝚖𝚘𝚝𝚎
┃◆ .𝙺𝚒𝚌𝚔
┃◆ .𝚁𝚎𝚟𝚘𝚔𝚎
┃◆ .𝙻𝚘𝚌𝚔𝙶𝙲
┃◆ .𝚄𝚗𝚕𝚘𝚌𝚔𝙶𝙲
┃◆ .𝙳𝚎𝚕𝚎𝚝𝚎
┃◆ .𝙶𝚎𝚝𝙿𝚒𝚌
┃◆ .𝙶𝚒𝚗𝚏𝚘
┃◆ .𝚂𝚎𝚗𝚍𝙳𝙼
┃◆ .𝙳𝚒𝚜𝙰𝚙𝚙𝚎𝚊𝚛 𝙾𝙽
┃◆ .𝙳𝚒𝚜𝙰𝚙𝚙𝚎𝚊𝚛 𝙾𝙵𝙵
┃◆ .𝙳𝚒𝚜𝙰𝚙𝚙𝚎𝚊𝚛 24H,7D
┃◆ .𝚄𝚙𝚍𝚊𝚝𝚎𝙶𝙽𝚊𝚖𝚎
┃◆ .𝚄𝚙𝚍𝚊𝚝𝚎𝙶𝙳𝙴𝚂𝙲
┃◆ .𝙰𝚕𝚕𝚁𝚎𝚚
┃◆ .𝙹𝚘𝚒𝚗𝚁𝚎𝚚𝚞𝚎𝚜𝚝𝚜
┃◆ .𝙸𝚗𝚟𝚒𝚝𝚎
┃◆ .𝚃𝚊𝚐𝚊𝚕𝚕
┃◆ .𝙷𝚒𝚍𝚎𝚝𝚊𝚐
┃◆ .𝚃𝚊𝚐𝙰𝚍𝚖𝚒𝚗𝚜
╰━━━━━━━━━━━━⪼
╭━❮ 𝙾𝚆𝙽𝙴𝚁 ❯━╮
┃◆ .𝙾𝚠𝚗𝚎𝚛
┃◆ .𝙼𝚎𝚗𝚞
┃◆ .𝙱𝚕𝚘𝚌𝚔
┃◆ .𝚄𝚗𝚋𝚕𝚘𝚌𝚔
┃◆ .𝚂𝚑𝚞𝚝𝙳𝚘𝚠𝚗
┃◆ .𝚓𝚒𝚍
┃◆ .𝙶𝚓𝚒𝚍
┃◆ .𝙲𝚕𝚎𝚊𝚛𝚌𝚑𝚊𝚝
┃◆ .𝚁𝚎𝚜𝚝𝚊𝚛𝚝
┃◆ .𝚄𝚙𝚍𝚊𝚝𝚎𝚌𝚖𝚍
┃◆ .𝚁𝚎𝚙𝚘
┃◆ .𝙰𝚕𝚒𝚟𝚎
╰━━━━━━━━━━━━⪼
╭━❮ 𝙵𝚄𝙽 ❯━╮
┃◆ .𝙵𝚊𝚌𝚔
┃◆ .𝙳𝚘𝚐
┃◆ .𝙷𝚊𝚌𝚔
┃◆ .𝙷𝚛𝚝
┃◆ .𝙷𝚙𝚢
┃◆ .𝙰𝚗𝚐𝚎𝚛
┃◆ .𝚂𝚢𝚍
┃◆ .𝚂𝚑𝚢𝚢
┃◆ .𝙼𝚘𝚗
┃◆ .𝙺𝚒𝚜𝚜
┃◆ .𝙲𝚞𝚗𝚏𝚞𝚣𝚎𝚍
┃◆ .𝙽𝚒𝚔𝚊𝚕
┃◆ .𝙷𝚊𝚗𝚍
╰━━━━━━━━━━━━⪼
╭━❮ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 ❯━╮
┃◆ .𝚂𝚝𝚒𝚌𝚔𝚎𝚛
┃◆ .𝚃𝚛𝚝
┃◆ .𝚃𝚝𝚜
╰━━━━━━━━━━━⪼
╭━❮ 𝙰𝙸 ❯━╮
┃◆ .𝙰𝚒
┃◆ .𝚐𝚙𝚝𝟺
┃◆ .𝙱𝚒𝚗𝚐
╰━━━━━━━━━━━━⪼
╭━❮ 𝙼𝙰𝙸𝙽 ❯━╮
┃◆ .𝙿𝚒𝚗𝚐
┃◆ .𝙰𝚕𝚒𝚟𝚎
┃◆ .𝙾𝚠𝚗𝚎𝚛
┃◆ .𝙼𝚎𝚗𝚞
┃◆ .𝚁𝚎𝚙𝚘
┃◆ .𝚁𝚎𝚋𝚘𝚝
╰━━━━━━━━━━━━⪼
╭━❮ 𝙰𝙽𝙸𝙼𝙴 ❯━╮
┃◆ .𝙶𝚊𝚛𝚕
┃◆ .𝚆𝚊𝚒𝚏𝚞
┃◆ .𝙽𝚎𝚔𝚘
┃◆ .𝙼𝚎𝚐𝚞𝚖𝚒𝚗
┃◆ .𝙼𝚊𝚒𝚍
┃◆ .𝙰𝚠𝚘𝚘
╰━━━━━━━━━━━━⪼
╭━❮ 𝙾𝚃𝙷𝙴𝚁 ❯━╮
┃◆ .𝙵𝚊𝚌𝚝
┃◆ .𝙳𝚎𝚏𝚒𝚗𝚎
┃◆ .𝙽𝚎𝚠𝚜
┃◆ .𝙼𝚘𝚟𝚒𝚎
┃◆ .𝚆𝚎𝚊𝚝𝚑𝚎𝚛
┃◆ .𝚢𝚝𝚜
┃◆ .𝚢𝚝𝚟
┃◆ .𝚂𝚁𝚎𝚙𝚘
┃◆ .𝙸𝚗𝚜𝚞𝚕𝚝
┃◆ .𝚂𝚊𝚟𝚎
┃◆ .𝚆𝚒𝚔𝚒𝙿𝚎𝚍𝚒𝚊
╰━━━━━━━━━━━━⪼
> © Pᨵׁׅᨰׁׅꫀׁׅܻꭈׁׅꫀׁׅܻժׁׅ݊ Bᨮ꫶ׁׅ֮ Fꫀׁׅܻᥣׁׅ֪ꪱׁׅ᥊ׁׅ Bᨵׁׅtׁׅ`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/89xq3r.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363354023106228@newsletter',
                        newsletterName: 'JawadTechX',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
