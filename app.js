var express         = require("express"),
    app             = express();


//App Config

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//Landing
app.get("/", function(req, res){
    res.render("landing");
});

//Projects
app.get("/projects", function(req, res){
    res.render("projects");
});

//Resume
app.get("/resume", function(req, res){
    res.render("resume");
});

//Contact
app.get("/contact", function(req, res){
    res.render("contact");
});


app.listen(3000, function(){
    console.log("Listening on port 3000");
});
