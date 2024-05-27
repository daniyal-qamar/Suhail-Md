const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923218228183";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_13_05_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MixcbiAgICAgICAgMTAxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA5MCxcbiAgICAgICAgMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDYwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDksXG4gICAgICAgIDUwLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDgyLFxuICAgICAgICA0MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNixcbiAgICAgICAgOTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIwLFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDU4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA5NixcbiAgICAgICAgMjM5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MixcbiAgICAgICAgODksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDcyLFxuICAgICAgICA3NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk3LFxuICAgICAgICA5MixcbiAgICAgICAgMzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjksXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTAwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI2LFxuICAgICAgICAzMixcbiAgICAgICAgMjIzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAzNixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA4OCxcbiAgICAgICAgNyxcbiAgICAgICAgODYsXG4gICAgICAgIDEwLFxuICAgICAgICA4NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4MixcbiAgICAgICAgNTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAzOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxODIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZmdQVEJaQTVjZERCSDEvZTlKL2YrUGJIcFFTTHRlNjRkZm9hQXdhZVlvaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxODI4MzczNjQyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDE4MUREMkM4RDgyRTIzNzlEOEI5QTMxMURGMzgxQkVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2ODMzNTgyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTgyODM3MzY0MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM2Q0YxMEIxNDYwRDk2M0ZEMzM1OEIzQTdGN0MxQjhDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjgzMzU4M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLWVFSVWRkVVJvMks2TXo0ZkJPU0JRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk1M2JiNDI4LTJiOWItNGFlNS04Yzk1LTNiN2FhNDRjZDU0ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMCxcbiAgICAgIDIxMCxcbiAgICAgIDcxLFxuICAgICAgMjM5LFxuICAgICAgMTUwLFxuICAgICAgODEsXG4gICAgICAyMTIsXG4gICAgICAxMCxcbiAgICAgIDI3LFxuICAgICAgMzgsXG4gICAgICA5NixcbiAgICAgIDEyNSxcbiAgICAgIDg0LFxuICAgICAgNDYsXG4gICAgICA0NyxcbiAgICAgIDI0OSxcbiAgICAgIDQwLFxuICAgICAgNSxcbiAgICAgIDAsXG4gICAgICAyMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMyxcbiAgICAgIDE0NixcbiAgICAgIDEyNCxcbiAgICAgIDEyNSxcbiAgICAgIDIxMixcbiAgICAgIDc0LFxuICAgICAgNjIsXG4gICAgICAxOTMsXG4gICAgICAyNDMsXG4gICAgICA2NyxcbiAgICAgIDE4MyxcbiAgICAgIDIzOSxcbiAgICAgIDEyNyxcbiAgICAgIDE4NixcbiAgICAgIDExNCxcbiAgICAgIDQ2LFxuICAgICAgMTQwLFxuICAgICAgMTEwLFxuICAgICAgMjE0LFxuICAgICAgMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09hQWh0MERFS3FhMDdJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZjVSQmpUZVpZNm8vVmJJa20za0ZGMjEzbjlTY0xhS1BDNWVhWEJQdEswQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIyc3ZnQlFxeHlnOHlHbTdxcUpJZDBkdzIyY2NTeUozQStNRUdkN1RrbFczMEh3RTZPaDNMM1NLOG5xdlp1RmhobFdweS9mRjd5OVBmWVFBcndBMEhBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpMFlUay9hR1QrakdoOG1aeDNvckNkbU1uWFVxa21ZbUVJYnpzemlHU21qQ3lGYVZOV3Q0Q1ZNeVZXTWFyMit2NXdGSVdETkhwWk9HZHptTStzdnlBZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjE4MjgzNzM2NDIxOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJCb3QgUG93ZXJlZCBieSAtIERhbmlcIixcbiAgICBcImxpZFwiOiBcIjEwODYzNzE3MTIyODkwNjo3QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMTgyODM3MzY0MjE6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjgzMzU4MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxxdlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTHF2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiWndPUUtGYnpURHdnckUvSmNYZjQ2aDF4aUxlT3ZRTis5U0t5N0N5UFF6Yz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDAwNDM5OTEwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY4MzM1ODI1NzFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
