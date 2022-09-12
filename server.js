const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const auth = require("./utils/auth");

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

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, ".public/uploads/");
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + file.originalname);
	},
});

const fileFilter = (req, file, cb) => {
	if (
		file.mimetype === "image/jpeg" ||
		file.mimetype === "image/jpg" ||
		file.mimetype === "image/png"
	) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const upload = multer({
	storage: storage,
	fileFilter: fileFilter,
});
// end of picture code

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//image endpoint
app.post("/uploadForm", upload.single(), async (req, res, next) => {
	if (req.file) {
		const pathName = req.file.path;
		res.send(req.file.pathName);
	}
});

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log("Now listening on", PORT));
});
