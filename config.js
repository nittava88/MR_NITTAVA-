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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,947xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94711772458,947xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_04_06_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDY0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDAsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDM0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDg3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDAsXG4gICAgICAgIDk2LFxuICAgICAgICA3NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDk2LFxuICAgICAgICAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDAsXG4gICAgICAgIDI1LFxuICAgICAgICA0MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDk0LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgODQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAzNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NixcbiAgICAgICAgMjUyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDksXG4gICAgICAgIDg4LFxuICAgICAgICA4MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY3LFxuICAgICAgICA1LFxuICAgICAgICA4MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICA1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDksXG4gICAgICAgIDExLFxuICAgICAgICA5NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzksXG4gICAgICAgIDM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDY0LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDgyLFxuICAgICAgICA4NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDg4LFxuICAgICAgICAyLFxuICAgICAgICA4NixcbiAgICAgICAgMTQxLFxuICAgICAgICA0OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDg2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTYzLFxuICAgICAgICA1NixcbiAgICAgICAgMTk4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDcyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDY0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDUzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjdyV2JrT3ZZKzJDTGE4T1lvQ2JuWVh2Q1pwY3EyZXFuUm1YZkZTMVRudWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3MTE3NzI0NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdGNDA1RDQwQ0E2REJFQjM4QUNFOTJBNDA1NEM1RERGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODEyNTQ4NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzExNzcyNDU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5QUEzNTk1NkU1ODYzNURFQjk1Qzk0NzZGNkMxNUI5QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTgxMjU0ODdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRTFpZzc5OVNTMTZ0cGpEUTZVckJWQVwiLFxuICBcInBob25lSWRcIjogXCJlZDk1MTMwYS1hMjk3LTRmOTAtYjA2ZS02NWIyNmMzMDg4ODJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAwLFxuICAgICAgMTg1LFxuICAgICAgNjksXG4gICAgICA2OCxcbiAgICAgIDQ1LFxuICAgICAgMTg2LFxuICAgICAgMjM1LFxuICAgICAgMzQsXG4gICAgICAxMjEsXG4gICAgICAxMixcbiAgICAgIDI1MSxcbiAgICAgIDEsXG4gICAgICAxMTgsXG4gICAgICAxNjUsXG4gICAgICAxOTMsXG4gICAgICA4MyxcbiAgICAgIDUsXG4gICAgICA5NyxcbiAgICAgIDg5LFxuICAgICAgMjM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0LFxuICAgICAgNDAsXG4gICAgICAxMDIsXG4gICAgICAyNixcbiAgICAgIDMzLFxuICAgICAgMTUyLFxuICAgICAgMjM1LFxuICAgICAgMjIwLFxuICAgICAgOTIsXG4gICAgICAxMTksXG4gICAgICAyMjUsXG4gICAgICAyNyxcbiAgICAgIDgzLFxuICAgICAgNjksXG4gICAgICAxOTUsXG4gICAgICA2OCxcbiAgICAgIDM1LFxuICAgICAgMTU3LFxuICAgICAgMjM1LFxuICAgICAgMTUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRXSDFXV1JQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcxMTc3MjQ1ODozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1MDIzODc2OTMzNjQ0MjozQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIi5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMdjE3TkVGRUthSG9yTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInEzbDVhVW05QkZHWVBCSWFFcmJrZzJEMm50TWtxY2RtVlBzcUo1ckxid1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidDVxNzl0NlNvNkJlcllweWJBMDhiUFFuM3dqckl4b3BtR2I4UTB4NVNvVnBhWnVtWlQxVE1GZDNTV1BocEJzZE1mZXIzOWI0RWNNMWxrR2NDTGNyQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWVRwcWpvbHRCYXc3c2k2dXlDc1RyTGpEU1Z4MXlGWmpJTDZwNDBnMXU4cEVHSkZ4bFhWZ0l0ZHg4NGl4QytoZ09Qb0w1UGxEdkdpRFA1MkJuVE4xQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MTE3NzI0NTg6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODEyNTQ4MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUswc1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSzBzLmpzb24iOiAie1wia2V5RGF0YVwiOlwicEh0UW03ZCsxcFFDNEFaMFp0NmlzRm5SU25vTTFycEVjSzBVTkV3U1pFST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTEzODMxMDk5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgxMjU0ODM1MzFcIn0iCn0="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
