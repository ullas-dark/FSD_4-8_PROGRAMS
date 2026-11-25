// Optional standalone server entry point.
// The lab manuals use the Express Generator entry point: npm start (bin/www).
// Use this file only if you want to start the app directly with: node server.js

var app = require('./app');
var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('Server running on port ' + port);
});
