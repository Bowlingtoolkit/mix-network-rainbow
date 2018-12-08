const Discord = require('discord.js')
const client = new Discord.Client()
client.on("ready", () => {
    function rainbow() {
      client.guilds.get('520246668508135424').roles.find("name", "Rainbow🌈").setColor("RANDOM");
    }
    setInterval(rainbow, 6000);//rainbow delay time (ms)
  })
  client.login(process.env.BOT_TOKEN)
