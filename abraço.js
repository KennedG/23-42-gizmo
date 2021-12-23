const Discord = require("discord.js");
const { MessageEmbed, MessageButton, MessageActionRow, MessageCollector } = require('discord.js');

module.exports = {
    name: "hug",
    aliases: ["abraço"], 

    run: async(client, message, args) => {



  var list = [
    'https://imgur.com/RgfGLNk.gif',
    'https://i.imgur.com/r9aU2xv.gif',
    'https://i.imgur.com/wOmoeF8.gif',
    'https://i.imgur.com/nrdYNtL.gif',
    'https://imgur.com/82xVqUg.gif'
  ];

    var list1 = [
    'https://imgur.com/c3WzMZu.gif',
    'https://imgur.com/BPLqSJC.gif',
    'https://imgur.com/ntqYLGl.gif',
    'https://imgur.com/v47M1S4.gif',
    'https://imgur.com/6qYOUQF.gif'
  ];

  var rand = list[Math.floor(Math.random() * list.length)];
    var rand1 = list1[Math.floor(Math.random() * list.length)];
  let pessoa = message.mentions.users.first() || client.users.cache.get(args[0]);
  
  if (!pessoa) return message.channel.send(`❌ | ${message.author} Mencione alguém para abraçar!`);

    if (pessoa.id == message.author.id) return message.channel.send(`❌ | ${message.author} você Não pode se abraçar ;-;!`);

  const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId("hug")
                .setStyle("SECONDARY")
                .setLabel("retribuir")
                .setEmoji(`🔁`)
                .setDisabled(false),
                                new MessageButton()
                .setCustomId("002")
                .setStyle("DANGER")
                .setLabel("cancela")
                .setEmoji(`❌`)
                .setDisabled(false)
                )

  let kazinho = new Discord.MessageEmbed()
  .setTitle(`🤗 Abraço ✨`)
  .setDescription(`💓 ${message.author} abraçou ${pessoa}!`)
  .setImage(rand)
  .setTimestamp()
  .setColor("RED")
  .setThumbnail(message.author.displayAvatarURL({format:"png"}))
  .setFooter(`🤗 Abraço`, message.author.displayAvatarURL({format:"png"}));

  const me = await message.channel.send({embeds: [kazinho], components: [row], fetchReply: true})

const filter1 = (interaction) => {
            if(interaction.user.id == pessoa) return true; 
            else {
                interaction.channel.send({ content: `❌ apenas o ${pessoa}  tem permissao de reagir no botão`, ephemeral: true })
            }
        }


const collector = message.channel.createMessageComponentCollector({componentType: 'BUTTON', time: 10 * 6000, filter: filter1, max: 1 })




  collector.on('collect', async (m) => {
            
            if (!pessoa)
            return;
            if (m.customId === 'hug') {
            me.edit({
                        embeds: [

                        new Discord.MessageEmbed()
                        .setTitle(`🤗 Abraço ✨`)
                        .setDescription(`💓${pessoa} retribuiu o abraço de ${message.author}!`)
                        .setColor("RED")
                        .setImage(rand1)
                        .setThumbnail(message.author.displayAvatarURL({format:"png"}))
                        .setFooter(`🤗 Abraço`, message.author.displayAvatarURL({format:"png"}))
                                                ]
})
};
 if (m.customId === '002') {
     setTimeout(() => me.delete(), 100)

};
});
        }
}