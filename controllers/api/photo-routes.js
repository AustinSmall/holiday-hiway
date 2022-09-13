const router = require("express").Router();
const multer  = require('multer');
const upload = multer({ dest: './public/data/uploads/' });


router.post('/upload', upload.single('image'), function (req, res) {
   // req.file is the name of your file in the form above, here 'uploaded_file'
   // req.body will hold the text fields, if there were any 
   console.log(req.file, req.body)
});


module.exports = router;