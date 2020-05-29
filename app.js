var express = require("express");
var app = express();

var request =  require("request");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

var ProgressBar = require("progressbar.js");

app.get("/", function(req, res){
    res.render("search");
});

app.post("/search", function(req, res){
    request("http://www.omdbapi.com/?apikey=thewdb&s=" + req.body.search, function(error, response, body){
		if(!error && response.statusCode == 200){
            res.render("results", {data: {api_data: JSON.parse(body).Search, search_query: req.body.search}});
		}
	});
});

app.get("/search/:id", function(req, res){

    request("http://www.omdbapi.com/?apikey=thewdb&i=" + req.params.id + "&plot=full", function(error, response, body){
		if(!error && response.statusCode == 200){
            res.render("more-info", {data: JSON.parse(body)});   
		}
	});
});


app.listen(process.env.PORT || 3000, process.env.IP, function () {
    console.log("server started");
});
