const fs = require("fs");

const db = require("../models");
const Image = db.images;

const uploadFiles = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    Image.create({
      data: fs.readFileSync(
        __basedir + "/public/uploads/" + req.file.filename
      ),
    }).then((image) => {
      fs.writeFileSync(
        __basedir + "/public/uploads/" + image.name,
        image.data
      );

      return res.send(`File has been uploaded.`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};
//NEED TO SOMEHOW ADD THIS TO HOUSE MODEL
module.exports = {
  uploadFiles,
};