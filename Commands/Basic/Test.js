// This file contans the bot's "Test" command

// First, we set all the required varibles

const {SlashCommandBuilder} = require("discord.js");

// This is the module

module.exports = {
    name: "test", // Set name and builder code values
    builder_code: new SlashCommandBuilder()
        .setName("test")
        .setDescription('Tests the bot. The bot will reply with "Bot online!" if it is working.'),
    async Execute(Command_Data) { // Function for when the command is ran, passing in the command data
        Command_Data.reply("Bot online!")
    }     
};