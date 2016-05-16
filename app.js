var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8111, function(){
    console.log('Server running on 8111...');
});
// npm install connect serve-static
// node app.js
// go to http://localhost:2000/index.html
