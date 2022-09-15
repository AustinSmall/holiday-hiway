const cloudinary = require('cloudinary').v2;
const router = require('express').Router();
const path = require('path');
require("dotenv").config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true
}); 


router.get('/upload', (req, res) => {
    console.log("Router hit.")
    cloudinary.uploader
    .upload(`${home.photo}`)
    .then(result => res.json(result))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
});



module.exports = router;