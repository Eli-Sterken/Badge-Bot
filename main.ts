// This is the file that builds and runs the bot

// First, we set all the required varibles

import {token} from "./info.json";
import {Client, GatewayIntentBits, SlashCommandBuilder} from "discord.js";
let client = new Client({intents: [GatewayIntentBits.Guilds]});

client.once("ready", info => { // Once the bot is logged in
    console.log(`Bot logged in and ready! Logged in as ${info.user.tag}`); // Print a sucess message
    Build_Command(); // Start the function to build the command
});

function Build_Command() { // Function to build the bot command
    const command = new SlashCommandBuilder() // Create a new slashCommandBuilder instance and assign it to a varible
        .setName("badge") // Set the name and description
        .setDescription("Get the active developer badge!")
    client.application.commands.create(command); // Create it    
};

client.on("interactionCreate", interaction => { // When a message is sent
    if(!interaction.isChatInputCommand()) return; // If the message is not a bot command, do nothing
    if(interaction.commandName === "badge") { // If it is the badge command
        interaction.reply("Go claim your badge!"); // Send response
    };
});

client.login(token); // Log the bot in using the token