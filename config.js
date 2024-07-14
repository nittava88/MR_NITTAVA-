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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_31_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDcyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUsXG4gICAgICAgIDIxLFxuICAgICAgICA3LFxuICAgICAgICAxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI5LFxuICAgICAgICA2NCxcbiAgICAgICAgODgsXG4gICAgICAgIDEzLFxuICAgICAgICAxOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA4NixcbiAgICAgICAgNjQsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA3NixcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM4LFxuICAgICAgICA1NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDMxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDc1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzksXG4gICAgICAgIDMzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEsXG4gICAgICAgIDk1LFxuICAgICAgICA0MyxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMyLFxuICAgICAgICA4OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQzLFxuICAgICAgICA1OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDcsXG4gICAgICAgIDYsXG4gICAgICAgIDc5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMxLFxuICAgICAgICA5NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjUxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MixcbiAgICAgICAgMjE4LFxuICAgICAgICA5NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOCxcbiAgICAgICAgMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkJ6dFBiSzRiaGFQM21WWW5UMllFVTNtOU0ybmlmUm4vcTZRZU10TnRJWlk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFTY0dWQ1AyUTB5ZHM5RDc1amhkZkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGFjOGFhNjgtNzhiNS00N2ZmLTg4NjAtMWVmMjRkODdmYTZiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgzLFxuICAgICAgMjI3LFxuICAgICAgNTYsXG4gICAgICAyMjcsXG4gICAgICAyNTUsXG4gICAgICA1MixcbiAgICAgIDQ3LFxuICAgICAgMTU5LFxuICAgICAgMzksXG4gICAgICAxNjQsXG4gICAgICAyMTEsXG4gICAgICAxMzUsXG4gICAgICAyNyxcbiAgICAgIDE4MixcbiAgICAgIDE2NSxcbiAgICAgIDI5LFxuICAgICAgMTg1LFxuICAgICAgMjMwLFxuICAgICAgMTA2LFxuICAgICAgMTY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMSxcbiAgICAgIDE2OSxcbiAgICAgIDIyMyxcbiAgICAgIDEwNixcbiAgICAgIDIyMyxcbiAgICAgIDIxMyxcbiAgICAgIDIzMixcbiAgICAgIDYwLFxuICAgICAgMTM5LFxuICAgICAgMTQ2LFxuICAgICAgMTIzLFxuICAgICAgODAsXG4gICAgICAxNTAsXG4gICAgICA0NixcbiAgICAgIDMyLFxuICAgICAgMTc5LFxuICAgICAgMTM1LFxuICAgICAgNzUsXG4gICAgICAxMjgsXG4gICAgICAxMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWjJUVjM2WURcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzExNzcyNDU4OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwMzUwMTA4NzE3MTc2OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmJ4MzkwR0VLQ3B6YlFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5RUo1Y012L1MrTjhNNDFuUWtpRGZnZ0JZSnpLaFFaK0pORjRJdmhrejAwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInJwWGJaTnc4dUhmZUx4QkVSbWZzUEJ3SDJUV0hmK0dacStSS21BbEJoeEs4WW52aDVHZnAvL0VjbVdGOTZQMHE3RDRTbzFOaXdwVjlzL1czdUw1ekJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImt6d01PMmw4a0hpMXFId0FpM1c4TkVlcDFuMkhUVkpJK3ZYalFNVlFTV3RMS211TmFLeTFKdUJMTjJxbm1IOWlmSy9qVm14MHhkWnoveFJhNGVMU2lRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzExNzcyNDU4OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA5MzE0OTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJQTZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlBNi5qc29uIjogIntcImtleURhdGFcIjpcIllRb2tOUGZRempWdm1DTTFhV3B6ZStqcnRmZld1OEtZOEdiYzBmcTZiQWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgwNzIxODkwMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwODgzNDYwOTcwXCJ9Igp9"  // PUT your SESSION_ID 


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
