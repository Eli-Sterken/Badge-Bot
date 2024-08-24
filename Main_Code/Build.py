# This file builds and runs the bot

# First, we import all the required exentions

import os, time, json

# Next, we set all the required varibles

Email = "eli.sterken@outlook.com"
Version = "1.0.0 beta"
Year = "2024"
Git_Link = "https://github.com/Eli-Sterken/Fern-Bot"
Bot_Token = ""
Client_ID = ""
Client_Secrit = ""
Invite_URL = ""
Invites_Enabled = "false"

def Close(Type): # Function for invalid input or closure message, passing in the message type
    if(Type == "1"):
        print("\n"
              "You input is blank or invalid. Closing in 15 seconds.") # Print an error
    elif(1 == 1):
        print("\n"
              "Closing in 15 seconds") # Print a message    
    time.sleep(1) # Wait 15 seconds and quit
    quit()

def Build(): # Function to build the bot
    JSON_Data = {
        "Bot_Token":f"{Bot_Token}",
        "Client_ID":f"{Client_ID}",
        "Client_Secrit":f"{Client_Secrit}",
        "Invite_URL":f"{Invite_URL}",
        "Invites_Enabled":f"{Invites_Enabled}"
    } # Set the json file data using the gathred information
    File_Data = json.dumps(JSON_Data, indent=4) # Dump the json data and assign it to a varible
    with open("../Data/Info.json", "w") as File:
        File.write(File_Data)  # Write the data to the info file
    print("\n")
    os.system("node Main.js") # Start the bot
    print("\n"
          "Bot termanated. Thank you for using Fern Bot.") # Once the bot shuts down, print a message and quit
    quit()

print( "\n"
      f"Fern Bot Copyright (C) {Year} Eli Sterken"
       "\n"
       "This program comes with ABSOLUTELY NO WARRANTY"
       "\n"
       "This is free software, and you are welcome to redistribute it"
       "\n"
       "under certain conditions."
       "\n") # Print the license message and give the user time to read it
time.sleep(10)

Check = input("Before starting, please make sure the following requirements have been met:"
              "\n\n"
              "1. You are not running this program as administrator"
              "\n\n"
              "2. You are running this program from the command line"
              "\n\n"
              '3. The current directory of the command line is the "Main_Code" directory of the bot'
              "\n\n"
              'If all of these requirements have been met, please enter "C" to continue, or enter "Q" to quit.'
              "\n") # Ask the user if they have met all the preresaquets

if(Check == "C") or (Check == "c"): # If they have
    Main_Menu = input("\n"
                      "Welcome! This program will help you build and run the bot. Please select an action below:"
                      "\n\n"
                      'Enter "B" to build and run the bot.'
                      "\n\n"
                      'Enter "V" for version info.'
                      "\n\n"
                      'Enter "H" for help.'
                      "\n\n"
                      'Or enter "Q" to quit.'
                      "\n") # Print out the main menu

    if(Main_Menu == "B") or (Main_Menu == "b"): # If the user chooses to build the bot
        # Ask for each piece f needed information and make sure it is not blank (exept for the invite url)
        # If it is not blank, set it in the varibles, but if it is blank, start the invalid input function
        Bot_Token_Input = input("Please enter your bot token:"
                                "\n\n")
        if(Bot_Token_Input == ""):
            Close("1")
        elif(1 == 1):
            Bot_Token = Bot_Token_Input
            Client_ID_Input = input("Please enter your client ID:"
                                    "\n\n")
            if(Client_ID_Input == ""):
                Close("1")
            elif(1 == 1):
                Client_ID = Client_ID_Input
                Client_Secrit_Input = input("Please enter your client secrit:"
                                            "\n\n")
                if(Client_Secrit_Input == ""):
                    Close("1")
                elif(1 == 1):
                    Client_Secrit = Client_Secrit_Input
                    Invite_URL_Input = input("Please enter your invite URL: (you can leave this blank if your bot is not public)"
                                             "\n\n")
                    if(Invite_URL_Input == ""):
                        Build()
                    elif(1 == 1):
                        Invites_Enabled = "true"
                        Invite_URL = Invite_URL_Input
                        Build()        
    elif(Main_Menu == "V") or (Main_Menu == "v"): # If the user chooses to view verson info            
        print( "\n"
              f"Fern bot version {Version}."
               "\n"
               "Made with love my Eli Sterken!"
               "\n"
              f"Learn more at {Git_Link}") # Print the version info and start the closing function
        Close("2")
    elif(Main_Menu == "H") or (Main_Menu == "h"): # If the user wants help
        print( "\n"
              f"For help, please Email me at {Email}") # Print the help message and start the closing function
        Close("2")
    elif(Main_Menu == "Q") or (Main_Menu == "q"): # If the user wants to quit, do that  
        quit()
    elif(1 == 1): # If the input is invalid, start the invalid input function
        Close("1")

elif(Check == "Q") or (Check == "q"): # If they have not, quit
    quit()
elif(1 == 1): # If the input is invalid, start the invalid input function
    Close("1")        