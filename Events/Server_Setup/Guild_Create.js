// This file contans the bot's "Guild_Create" event

// First, we set all the required varibles

const {writeFile, readFile} = require("node:fs");

// This is the module

module.exports = {
    name: "guildCreate", // Set the name
    async Execute(Info) {
        readFile("../Data/Servers/Template.json", "utf-8", (Error, FileData) => { // Read the server data template file
            writeFile(`../Data/Servers/${Info.id}.json`, FileData, () => { // Create the server data file
                const Channels = Array.from(Info.channels.cache.values()).filter(c => c.isTextBased() && !c.isVoiceBased()) // Get a list of text channels 
                const Channel = Channels[Math.floor(Math.random() * Channels.length)] // Pick a random one
                Channel.send("Hi there, thank you for using Fern Bot in your server! To get setup, run /setup!") // Send the welcome message
            })
        })
    }
};