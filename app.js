var express = require('express');
var app =     express();


app.set("view engine", "ejs");
app.use(express.static("public"));





app.get("/", function(req, res){
	res.render("home.ejs");
});




app.get('*', function(req, res) {
  res.render("home.ejs");
});




app.listen(process.env.PORT, function(req, res){
	console.log("Porfolio app listening on port 3000");
});
