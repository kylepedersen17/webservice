var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");

//root route
router.get("/", function(req, res){
    res.render("landing");
});

//register
router.get("/register", function(req, res){
   res.render("register"); 
});

//sign up
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to YelpCamp, " + user.username + "!");
           res.redirect("/campgrounds"); 
        });
    });
});

//login form
router.get("/login", function(req, res){
   res.render("login"); 
});

//login
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res){
});

// logout 
router.get("/logout", function(req, res){
   req.logout();
   req.flash("success", "You are now logged out!")
   res.redirect("/campgrounds");
});


module.exports = router;