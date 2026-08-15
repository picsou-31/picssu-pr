const express = require('express');
const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;
const SteamStrategy = require('passport-steam').Strategy;

const app = express();

// إعدادات الاستراتيجيات هنا

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
