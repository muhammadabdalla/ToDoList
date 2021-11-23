const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const date = require(__dirname+"/date.js")


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('public'));
var items=["Buy food"
  ,"Cook food"
  ,"Eat food"];
  var workitems=[];
  var item;

app.get("/", function(req, res) {
 var day=date.getDate();
  res.render('list', {
  title: day,
    itemlist: items
  });
});
app.post("/", function(req, res) {
  item = req.body.n1;
 
 // day = today.toLocaleDateString("en-US", options);

  var button=req.body.listbutton;

  if(button=="work list"){
    workitems.push(item)
    res.redirect("/work")
    
      }else{
    
       
        res.redirect("/")
        items.push(item);
      }
  
})

app.get("/about", function(req, res) {

  res.render('about'
  );



 
  
});

app.get("/work", function(req, res) {

  res.render('list', {
    title: "work list",
    itemlist: workitems
  });



 
  
});







app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
