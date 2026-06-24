const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID |KnightBot!H4sIAAAAAAAAA5VUyY7iSBT8l7waNd5ZpJIGrxizGjCYUR9cdtok3jPTGNPi31umqrr6MNNTc8tN8eJFxMsfIC8QgTZswfgHKDG6+hR2S9qWEIyBUkcRxKAHQp/6YAxWS/1y5A+6op5mPIzOl02aaNlFDw8nNr8tD2RleHuqTpdT8QU8eqCsX1MU/AEwJsfK2MHAZpzaL9SQVJVXSFej2AateWUXd87pV5OhQJviBTw6RB9hlMd6eYYZxH5qw3btI/xF+kqQMpm0rsL0Vt/Oolar6dYaTpb0cmqtZJcObsRAlu9w8dfoWwLduVMpH7q2MneWdtbEblCyJTPvj45KnJcHihLJTSQteKNPUJzD0AphThFtv667sdUPjctspIGFi1nq3m2B2tyonbN2EQrH4yt9NbkbGRw3XyOe36bN0i/mp8i7B3N2NmDJCjsF3RQGkU9nhmHCllnMiru7/534Gn9kJfk/uiOFu6f8HDtTa7QKrM1q0b+RZZpVQ2fneszxUBkSRGyb81+kH3DBqZmdp9I9agM53WpHabq49rVzaI1OK8U73+VduIALTl180vdpjf/EstLW/OSKQict3a0Jh0VYChpsXLJzUXtpkx1Ht2u5sO/GsphLMnutN2LjZYYAG8joZK0X1iGBYXhI4tfjSaR1tYNK/PLsKIGtFYIx9+gBDGNEKPYpKvLnGT/oAT+8bmGAIX3KC4JZkNz0kyoegnjTzlBrTT2hioRRqnnT+YaDc25VeYPqNNVfQA+UuAggITCcIkIL3C4gIX4MCRj//b0Hcnijb8Z15QSuByKECd3ndZkWfvjh6selHwRFndNtmwdqt4AYjNnPY0gpymPS6VjnPg7O6ArVs08JGEd+SuCvDiGGIRhTXMNfU6sWYSf82l3Yp+VQAT2QPQ1BIRgDXhjIEseNBI4fjTn2L/Kt6WD9svyWQwp6IH1/Jg1H8mgoceJIlsXuZXfx+MWwAwwh9VFKwBio9nEm9BtNn23pcKmb5kSPJ2o8AZ8dfUTjTXrDnGxij7mZN7k5iomxrY6iaTp5VRfOHp/Z1vV48ZCvldh6+QcQMAZin7u6e30Rn2IRB/OZyu+9vl8G6CrZUZjp3kHLMuF1dLzg1b2ZEsotGrhx0/6S4LOAeWtnTj2SlG5qjxaTVmZ9daBsXrpqIbyiAP5ezNN2g8Gu7QfiUGzS5naaJ4EzutmTtXKIwmpW8ZITvMpmwxxu1N0SrTGgqVh1Qz0mEliPHV1zKyWXWV/OzMnQLzhT095D+xya9P2zQs84dV512wjB5+znfufgf3v3RryLGPvo/Ybx/pv8y0QqjhPrlrkmDoHEYGbKvkoZ5ZycZFzpri2Gi/SwrI3y3ngqeDy+90CZ+jQqcAbGwM9DXKAQ9AAu6i6zVh4VfyimTmJrEsfLrvPUJ3TyOQc7lEFC/awEY24w5AWeH4rC4yd0clqhPQcAAA==| "enter your session",
    CAPTION: process.env.CAPTION || "*ᴘᴏᴡᴅᴇʀᴇᴅ ʙʏ ᴛᴀʟᴋᴅʀᴏᴠᴇ*",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    AUTO_TYPING: process.env.AUTO_TYPING || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "false",
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/UfzyhWN.jpeg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M BYTE-LITE WHATSAPP BOT 😊♻️",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "ʙʏᴛᴇ-ʟɪᴛᴇ",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
    AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "`𝒚𝒐𝒖𝒓 𝒔𝒕𝒂𝒕𝒖𝒔 𝒔𝒆𝒆𝒏 𝒋𝒖𝒔𝒕 𝒏𝒐𝒘 𝒃𝒚 𝒃𝒚𝒕𝒆-𝒍𝒊𝒕𝒆`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
