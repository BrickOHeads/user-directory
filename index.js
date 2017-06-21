          console.log("hello there!");

          const express = require('express');

          const mustacheExpress = require('mustache-express');

          const data = require('./data');
          const app = express();

          // Register '.mustache' extension with The Mustache Express
          app.engine('mustache', mustacheExpress());
          app.set('view engine', 'mustache');
          app.set('views', './views');

          // build an Express app that works as a directory of users in the file. You should use require to get the data from the data.js file

          app.get('/', function (req, res) {
            res.render('index', {users: data.users});
          });

          app.get("/css/*",(req,res)=>{
	           res.sendFile(robot.css);
})

console.log("listening");

          app.listen(3000, function () {
              console.log("Successfully started express application!");
          });
