const fs = require('fs');
const express = require("express");
const mysql = require("mysql");

const app = new express();


// const dbInfo = {
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "SnippetsDB"
// };

// const connection = mysql.createConnection(dbInfo);


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.all("/", serveIndex);
app.post("/getBranchInfo", getBranchInfo);

app.listen(3000, process.env.IP, startHandler());

// connection.connect(function(err) {
//   if(err) throw err;
// });

function startHandler() {
  console.log("Server listening at http://localhost:3000");
}

function serveIndex(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  let index = fs.readFileSync('index.html');
  res.end(index);
}

function getBranchInfo(req, res) {
    let queryDate = req.body.date;
    let queryBranch = req.body.branch;
    console.log(`${queryBranch} services on ${queryDate}`);

}
