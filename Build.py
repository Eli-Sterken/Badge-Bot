import os, json, sys, time

email = "eli.sterken@outlook.com"
version = "2.0.0 Beta"

if("-v" in sys.argv) or ("-h" in sys.argv):
    if(sys.argv[1] == "-v"):
        print(f"\nBadge Bot version {version}!\nMade with love by Eli Sterken")
        time.sleep(10)
        sys.exit()
    elif(sys.argv[1] == "-h"):
        print(f"\nFor help, please email {email}.")
        time.sleep(10)
        sys.exit()    

def checkToken():
    token = input("\n\nPlease enter your bot token below:\n\n")
    if(token == None) or (token == ""):
        print("\n\nInvalid token, try again.")
        checkToken()
    else:
        return token    

def getInfo():
    check = input('\nWelcome to the badge Bot build script! Before continuing, please make sure you are not running this script as administrator.\nTo continue, enter "C"\n\n').lower()
    if(check == "c"):
        return checkToken()
    else:
        print("\n\nQuitting....")
        sys.exit()

with open("./info.json", "w") as configFile:
    configFile.write(json.dumps({"token":getInfo()}, indent=4))
print("\n")
os.system("node ./main.ts") 
print("\n\nBot exiting, thank you for using badge bot!")
sys.exit()   