const express = require('express')
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.use(new GoogleStrategy())

// 659681052108-n9ae1evna2fpbk3sb7uf4nb8kdocimtd.apps.googleusercontent.com
// e7q93fvn2989rlzSs0HQyrUT

const PORT = process.env.PORT || 5000;
app.listen(5000);