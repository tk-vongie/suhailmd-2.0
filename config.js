const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263777397128";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_11_11_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDMxLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA3LFxuICAgICAgICAzMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDk3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQzLFxuICAgICAgICAwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQzLFxuICAgICAgICAyOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTcwLFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA4LFxuICAgICAgICA0NCxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIyLFxuICAgICAgICA5MixcbiAgICAgICAgNjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MixcbiAgICAgICAgMTAsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA4LFxuICAgICAgICA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUxLFxuICAgICAgICA0NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTksXG4gICAgICAgIDI5LFxuICAgICAgICA3NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTczLFxuICAgICAgICA3NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODEsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ2LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzksXG4gICAgICAgIDE4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA1LFxuICAgICAgICA5MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNixcbiAgICAgICAgMjM3LFxuICAgICAgICA2MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDkxLFxuICAgICAgICA0OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzksXG4gICAgICAgIDgzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTQsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0bWNwemJMNTNVOUUzdHdmMnJGN2RhZmtmTmNPS3NPQlhuRUd2M0VNc0tnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKSHdJLUZmSVNrQ1l0SVVuNUFCR21BXCIsXG4gIFwicGhvbmVJZFwiOiBcImQzMzg5MWM2LTQwZDktNDE3Zi1iZDc2LTY0Y2JiNzRlZDA0ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTMsXG4gICAgICA5NSxcbiAgICAgIDExNSxcbiAgICAgIDAsXG4gICAgICAxNjAsXG4gICAgICAyMTUsXG4gICAgICAxNzUsXG4gICAgICAyNixcbiAgICAgIDExLFxuICAgICAgMTg4LFxuICAgICAgMjAsXG4gICAgICAyMTcsXG4gICAgICAzNSxcbiAgICAgIDU3LFxuICAgICAgNixcbiAgICAgIDYxLFxuICAgICAgMTc3LFxuICAgICAgMTc5LFxuICAgICAgMTgsXG4gICAgICAyMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkyLFxuICAgICAgMTQwLFxuICAgICAgMjUxLFxuICAgICAgMzUsXG4gICAgICA3MyxcbiAgICAgIDcyLFxuICAgICAgMjQ1LFxuICAgICAgMTUzLFxuICAgICAgMTY5LFxuICAgICAgMjExLFxuICAgICAgMTg3LFxuICAgICAgNzQsXG4gICAgICAxMzMsXG4gICAgICAxMTgsXG4gICAgICAxNTAsXG4gICAgICAxMDUsXG4gICAgICA3OCxcbiAgICAgIDM4LFxuICAgICAgMTAsXG4gICAgICAxNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSDlNOEZKUEVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc3NzI5NzEyODo0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkLrwnZGW8J2RpvCdkaIg8J2Rh/CdkZzwnZGa8J2RlvCdkZzwnZGY8J2RjlwiLFxuICAgIFwibGlkXCI6IFwiMTY2Njk2ODQxMTU4ODE1OjQ2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09tRTNLOEJFSlM5eUxrR0dCa2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWklTV3dlUll1aHBENDVqeThSTU5DSHFrQ215ejliM1NQS3VUR3ZkenRGMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJyZHBreHRhM3FFUkJVTmFtQVFQSTJlMWlWVlZwcFIyYXlycmhmWE5mNXgvVmw5NkJRRUV2OGZ1TXBBc2k2RDJ1aEl3cSt6aUVKdUVGNS94MDVjUmNDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4ZmRRdkE5aG9FM0NBUCtYdGw2bWNjUUpYbFdXazRQY1ZmT3ZTUHJ0MUdGUFR1VkIyVW54bENadDYvZWQyZjR6ZVU3L2tiUjBhdkFJMmpNcWdNKzRCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3NzcyOTcxMjg6NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMzM3ODc5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXo4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJejguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVU21GcW1RTERxN2xkRlF2Z3BLbVRIeHcrd3ZNaTFndkdFUGdHcWJGc1FFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM2ODUwOTU0NSxcImN1cnJlbnRJbmRleFwiOjE3LFwiZGV2aWNlSW5kZXhlc1wiOlswLDQsNV19LFwidGltZXN0YW1wXCI6XCIxNzMxMjQ4MjI0Nzk1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Giyu",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
