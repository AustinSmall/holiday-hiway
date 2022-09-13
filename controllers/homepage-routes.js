const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homepage")
});

router.get("/login", (req, res) => {
  console.log(req.session);
  if(req.session.isLoggedIn) {
    console.log("The user is logged in");
    res.redirect("/");
    return;
  }
  res.render("login")
});

router.get("/signup", (req, res) => {
  res.render("sign-up")
});

module.exports = router;