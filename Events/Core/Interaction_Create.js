// This file contans the bot's "Interaction_Create event"

// First, we set all the required varibles

const {Collection} = require("discord.js");
const {Get_Files} = require("../../Utilaties/Get_Files.js");

function Get_Commands(Commands_Directory) { // Function to get all commands, passing in the commands directory
    let Commands = new Collection(); // Create a new collection and assign it to a varible
    const Command_Files = Get_Files(Commands_Directory); // Get all the command files with the "Get_Files" function and assign it to a varible
    for(const Command_File of Command_Files) { // For every commsnd file
        const Command = require("../"+Command_File); // Require it
        Commands.set(Command.builder_code.toJSON().name, Command); // Add it to the "Commands" collection
    };
    return Commands; // Return the "Commands" colection
};

// This is the module

module.exports = {
    name: "interactionCreate", // Set the name and require the client to be passed in
    require_client: true,
    async Execute(Interaction_Data, Client) { // Function for when the event is ran, passing in the interaction data and bot client class
        Client.commands = Get_Commands("../Commands") // Add commands to the Client class and set them to the "Get_Commands" function

        if(!Interaction_Data.isChatInputCommand()) return // If the message is not a bot command, do nothing
        let Command = Client.commands.get(Interaction_Data.commandName) // Get the commands from the list of all commands, and assign it to a varible

        try { // Try this
            if(Interaction_Data.replied) return // If the command is already replied to, do nothing
            Command.Execute(Interaction_Data) // Start the commands "Execute" function
        } catch (error) { // If there was an error
            console.error(error) // Print it in the console
        }
    }
};