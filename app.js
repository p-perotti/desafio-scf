var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var adminMiddleware = require("./adminMiddleware");

var teste1 = require("./teste1");
var teste2 = require("./teste2");
var teste3 = require("./teste3");
var teste4 = require("./teste4");
var teste5 = require("./teste5");
var teste6 = require("./teste6");

app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/', function(_, res){
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  get users/access </br>
  patch users/admin </br>
  `);
});

app.get("/user", teste1.getUser);
app.get("/users", teste1.getUsers);
app.post("/users", teste2)
app.delete("/users", adminMiddleware, teste3)
app.put("/users", adminMiddleware, teste4)
app.get("/users/access", teste5);
app.post("/user/session", teste6.setSession)
app.patch("/user/admin", teste6.setAdmin)

app.locals.userInSession = {};

app.use('*', adminMiddleware, teste6.setSession, teste3, teste4)

const port = 3000;
app.listen(port, function() {
  console.log(`Express server listening on port ${port}`);
});