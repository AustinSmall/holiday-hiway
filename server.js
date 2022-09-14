const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const auth = require("./utils/auth");
const router = require("express").Router();
const app = express();
const PORT = process.env.PORT || 3001;

const path = require("path");

const exphbs = require("express-handlebars");
const hbs = exphbs.create({ auth });

const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);


const sess = {
	secret: "Ultimate secret",
	cookie: {},
	resave: false,
	saveUninitialized: true,
	store: new SequelizeStore({
		db: sequelize,
	}),
};
// picture upload multer app
//Run the command npm install express multer — save
const multer = require("multer");
const imageFilter = (req, file, cb) => {
	if (file.mimetype.startsWith("image")) {
	  cb(null, true);
	} else {
	  cb("Please upload only images.", false);
	}
  };
  
  var storage = multer.diskStorage({
	destination: (req, file, cb) => {
	  cb(null, __basedir + "/public/uploads/");
	},
	filename: (req, file, cb) => {
	  cb(null, `${Date.now()}-bezkoder-${file.originalname}`);
	},
  });
  
  var uploadFile = multer({ storage: storage, fileFilter: imageFilter });
  module.exports = uploadFile;

// end of picture code

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");



// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log("Now listening on", PORT));
});
