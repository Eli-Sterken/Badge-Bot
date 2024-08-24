// This file contans the bots "Client_Ready" event

// This is the module

module.exports = {
    name: "ready", // Set the event name and require it to be a .once event
    once_event: true,
    async Execute(Info) { // Function for when the event is fired, passing in the event info
        console.log(`Bot logged in and initalized sucessfully! Logged in as ${Info.user.tag}`) // Print a sucess message, including the bot client's username
    }
}