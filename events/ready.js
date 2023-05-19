const { ActivityType } = require('discord.js');
const client = require('..');
const chalk = require('chalk');

client.on("ready", () => {
	client.user.setActivity( { name: `made by kaluye#4700}`, type: ActivityType.Watching } )
	client.user.setStatus('online')

	console.log(chalk.blue.bgRed.bold(`Logged in as ${client.user.tag}!`))
});