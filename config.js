const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="nittava99@gmail.com"
global.location="matara,yatiyana."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://nittava:Iamride9@@nittava.uivsr5o.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/sri lanka";
global.github=process.env.GITHUB|| "https://github.com/nittava88/MR_NITTAVA-/";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "94711772458" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94711772458";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,947xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,947xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94711772458,947xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_11_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTgyLFxuICAgICAgICA4MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDc5LFxuICAgICAgICAyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAzMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1LFxuICAgICAgICA2NixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDkzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDksXG4gICAgICAgIDQ4LFxuICAgICAgICA0MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDg2LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICA5NSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDc3LFxuICAgICAgICAxODUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MixcbiAgICAgICAgMTQxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICAxLFxuICAgICAgICAxODEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzksXG4gICAgICAgIDM0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDgwLFxuICAgICAgICA5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODAsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzksXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NCxcbiAgICAgICAgNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDkxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjM1LFxuICAgICAgICA2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODAsXG4gICAgICAgIDI4LFxuICAgICAgICA0MixcbiAgICAgICAgODMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODEsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXMTVWaTNUTktJM0dteEI3dVNUYjdnR0cxTkRrSFVLS3ZoblE1SDFVZXVNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzExNzcyNDU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyOThCNUVBMEJEMDlGODI3MTM4QjMyREIxOUI0NUE2N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA4ODM0NjFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcxMTc3MjQ1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRkFCMjAwRTNENDJFNEU1MjhFNzZDODIxMTdGQUFGOEFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwODgzNDYxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImgtcWwwWVlLUVBHOHR4V3EtaW5ES2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWFkY2RlYzgtY2JiOS00YmU4LWJkMjItZWYxMDhjZGRlMTc2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OCxcbiAgICAgIDEzMyxcbiAgICAgIDcwLFxuICAgICAgMyxcbiAgICAgIDMzLFxuICAgICAgMTc0LFxuICAgICAgNDUsXG4gICAgICAyNDAsXG4gICAgICAyMDQsXG4gICAgICAxMDgsXG4gICAgICA2OSxcbiAgICAgIDE2OSxcbiAgICAgIDc3LFxuICAgICAgMTg1LFxuICAgICAgOTcsXG4gICAgICAxMTIsXG4gICAgICA2OSxcbiAgICAgIDIzMyxcbiAgICAgIDIxNyxcbiAgICAgIDE5NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNixcbiAgICAgIDIwNixcbiAgICAgIDEwOSxcbiAgICAgIDExNyxcbiAgICAgIDIwNSxcbiAgICAgIDIzNSxcbiAgICAgIDE0MSxcbiAgICAgIDgxLFxuICAgICAgMTk1LFxuICAgICAgMjAwLFxuICAgICAgMTE2LFxuICAgICAgMjE2LFxuICAgICAgMTkwLFxuICAgICAgMTI4LFxuICAgICAgODMsXG4gICAgICA1NSxcbiAgICAgIDE4MCxcbiAgICAgIDc1LFxuICAgICAgMTQ0LFxuICAgICAgMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDQjM1TUw0TVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MTE3NzI0NTg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjAzNTAxMDg3MTcxNzY6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOYngzOTBHRUlDeXlyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInlFSjVjTXYvUytOOE00MW5Ra2lEZmdnQllKektoUVorSk5GNEl2aGt6MDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSGREMitONllPcHlLYVFLUXByYU93UWh6c0YwcEUydllDb0drRVdNWGFiTDYrYkR6TmFKdDAxWEs2b0NQRTJEOFhXeTdMaEwyUmU1L2xPREJhcXB5QUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicDMrNlAwMU04UVpGTlY5c2h1MXljNSsvSlcyMmVtNmY3UC80NXZ2TkJ0NjNDZ2U1eUE5NXBqVHVYamNBYUdhanlhMGJrOVVpbEtwaXRDTVBmYVdmQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MTE3NzI0NTg6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDg4MzQ1OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlBNlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSUE2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiWVFva05QZlF6alZ2bUNNMWFXcHplK2pydGZmV3U4S1k4R2JjMGZxNmJBZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODA3MjE4OTAyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA4ODM0NjA5NzBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MR_NITTAVA-ᴍᴅ"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "MR_NITTAVA ",
  ownername:process.env.OWNER_NAME|| "TASHINDU MANURANGA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "NITTAVA99"  ).toUpperCase(),



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
