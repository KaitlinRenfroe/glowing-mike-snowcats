const express = require('express')
const app = express()
const port = process.env.PORT || 4000

//set view engine to ejs 
// set the view engine to ejs
let path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// use res.render to load up an ejs view file

let myTypeServer = "The Reformer";

app.get("/", (req, res) => {
  res.render("katierenfroe-webpage");
});

// app.get('/', function(req, res) {

//   res.render('katierenfroe-webpage', {
   
//     myTypeClient: myTypeServer 

//   });
  
// });

app.get('/', function (req, res) {
  res.send('Hello World from Express')
})

app.listen(port, () => {
  console.log(`Mike app listening on port ${port}`)
})