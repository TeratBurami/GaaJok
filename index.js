const { Client, GatewayIntentBits, messageLink } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, StringSelectMenuBuilder, EmbedBuilder} = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const express = require('express');
const app = express();

app.get('/' , (req,res) => res.send('Working!'))
app.listen( 3000 , () => 
  console.log(`Ready`)
);

const restaurant=["ศรีจันทร์","monster curry","sun bae","กล่องกับข้าว","ข้าวมันไก่ประตู 4","ข้าวมันไก่ MLC","เซเว่น"];

client.on('ready', () => {
  console.log(`บอท ${client.user.tag} กำลังออนไลน์อยู่`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;


  if (interaction.commandName === 'menu') {

		const row = new ActionRowBuilder()
			.addComponents(
				new StringSelectMenuBuilder()
					.setCustomId('select')
					.setPlaceholder('กดเลือกที่นี่')
					.addOptions(
						{
							label: 'ระบบสุ่มร้านอาหาร',
							description: 'restuarant random',
							value: 'first_option',
						},
            			{
							label: 'ชมบีมหน่อย :)',
							description: 'beamsohandsome',
							value: 'second_option',
						},
            			{
							label: 'Contact',
							description: 'contact of gaajok members',
							value: 'third_option',
						},
            			{
							label: 'clear',
							description: 'clear',
							value: 'fourth_option',
						},
					),
			);

      const embed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle('กรุณาเลือกเมนูการทำงาน : จุ๊กรู้วๆ')

		await interaction.reply({ content: 'ข้อความแสดงผล', embeds: [embed], components: [row] });


	}

});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isStringSelectMenu()) return;

	const selected = interaction.values[0];

	if (selected === 'first_option') {
		await interaction.reply(restaurant[Math.floor(Math.random()*restaurant.length)]);
    await wait(4000);
    await interaction.deleteReply();

	} else if (selected === 'second_option') {
		await interaction.reply('บีมหล่อมากกกกก');
    await wait(4000);
    await interaction.deleteReply();

	}else if(selected==='third_option'){
		const beam = new ButtonBuilder()
			.setCustomId('primary')
			.setLabel('Click me!')
			.setStyle(ButtonStyle.Primary)

		await interaction.reply({ content: 'test', components: [beam] });

	
	

  }else if(selected==='fourth_option'){
    await interaction.channel.bulkDelete(100);
  }

  
});


client.login('MTA2ODUzOTc2NDAwMjc4NzM0OA.GsNCxg.Vee_UTX3Uq0yyc3gfyF103EbRPqdhQpyzc75W4');