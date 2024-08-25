// This is the file that builds and runs the bot

// First, we set all the required varibles

const {Bot_Token} = require("./Info.json");
const {Client, GatewayIntentBits, SlashCommandBuilder} = require("discord.js");
let Bot_Client = new Client({intents: [GatewayIntentBits.Guilds]});

Bot_Client.once("ready", Info => { // Once the bot is logged in
    console.log(`Bot logged in and ready! Logged in as ${Info.user.tag}`); // Print a sucess message
    Build_Command(); // Start the function to build the command
});

function Build_Command() { // Function to build the bot command
    const Command = new SlashCommandBuilder() // Create a new slashCommandBuilder instance and assign it to a varible
        .setName("badge") // Set the name and description
        .setDescription("Get the active developer badge!")
    Bot_Client.application.commands.create(Command); // Create it    
};

Bot_Client.on("interactionCreate", Interaction => { // When a message is sent
    if(!Interaction.isChatInputCommand()) return; // If the message is not a bot command, do nothing
    if(Interaction.commandName === "badge") { // If it is the badge command
        Interaction.reply("Go claim your badge!"); // Send response
    };
});

Bot_Client.login(Bot_Token); // Log the bot in using the token