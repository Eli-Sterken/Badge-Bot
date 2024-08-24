// This is the main file that starts the bot

// First, we set all the required varibles

const {Client, GatewayIntentBits} = require("discord.js");
const {Bot_Token, Client_ID} = require("../Data/Info.json");
const {Get_Files} = require("../Utilaties/Get_Files.js");
const {REST} = require("@discordjs/rest");
const {Routes} = require("discord.js");
let Bot_Client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});
const Event_Files = Get_Files("../Events");

let Commands = []; // Create an empty array and assign it to a varible
const Command_Files = Get_Files("../Commands"); // Get all the command files using the "Get_Files" function and assign them to a varible

for(const Command_File of Command_Files) { // For every command file
    const Command = require(Command_File); // Require it
    Commands.push(Command.builder_code.toJSON()); // Add the "builder_code" section to the "Commands" array, converting it to JSON
};

const Rest = new REST({version: "10"}).setToken(Bot_Token); // Create a new REST instance with a verson of 10 and set the token to our bot's token
Rest.put(Routes.applicationCommands(Client_ID), {body: Commands}) // Send all the commands to Discord
    .then(() => console.log("Bot commands sent to Discord sucessfully!")) // If the above operation completes sucessfully, print a sucess message
    .catch(console.error); // But if there was an error, print it to the console

for(const Event_File of Event_Files) { // For every event file
    const Event = require(Event_File); // Require it
    if(Event.once_event) { // If it is a .once event, run it as that
        Bot_Client.once(Event.name, (...args) => Event.Execute(...args));
    } else if(Event.require_client) { // If the event is a .on event, run it as that (if it needs the client we will pass that in, too)
        Bot_Client.on(Event.name, (...args) => Event.Execute(...args, Bot_Client));
    } else {
        Bot_Client.on(Event.name, (...args) => Event.Execute(...args));
    };
};

Bot_Client.login(Bot_Token); // Log the bot in using the token