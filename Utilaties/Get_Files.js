// This file contans the function to get all files in a directory, exportible as a module

// First, we set all the required varibles

const {readdirSync} = require("node:fs");

// This is the module

function Get_Files(Files_Directory) { // Function to get all files, passing in the directory of them
    const Directory_Contents = readdirSync(Files_Directory, { // Read the files directory with "FileTypes" enabled
        withFileTypes: true
    })
    let Files = [] // Create a new empty array and assign it to a varible
    for(const File of Directory_Contents) { // For every file in the directory
        if(File.isDirectory()) { // if it is a folder
            Files = [ // Add it's files to the "Files" array along with it's existing contents
                ...Files,
                ...Get_Files(`${Files_Directory}/${File.name}`)
            ]
        } else if(File.name.endsWith(".js")) { // Otherwise, if it is a javascript file
            Files.push(`${Files_Directory}/${File.name}`) // Add it to the array
        }
    }
    return Files; // Return all the colected files
}

module.exports = {Get_Files}; // Export the module