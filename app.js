var express         = require("express"),
    app             = express();
    http            = require("http");


//App Config

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

setInterval(function(){
   http.get("https://drewportfolio.herokuapp.com/");
}, 300000); // Every 5 minutes, ping page (300000)
    
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
