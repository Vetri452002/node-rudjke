let express = require('express');
let app = express();
let absolutePath = __dirname + "/views/index.html";
const mySecret = process.env['MESSAGE_STYLE']
app.use("/public", express.static(__dirname + "/public"));
//app.get("/", (req, res) => {
  //res.send("Hello Express")
//})

app.get("/", (req, res) => {
  res.sendFile(absolutePath)
})

app.get("/json", (req, res) => {
  if(mySecret ==="uppercase"){
  res.json({"message":  "HELLO JSON"})
  } else {
    res.json({"message":"hello json"})
  }
})
console.log("Hello World")
// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
