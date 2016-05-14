var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var url = require('url');

var currentUser = {};
app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.get('/data', function(req, res){
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  console.log(query);
  io.emit('newValue', {value: query.value});
  res.sendStatus(200);
  
});

http.listen(4000, function(){
  console.log('listening on *:4000');
});

// http.listen(8000, "104.236.89.78", function(){
//   console.log('listening on *:4000');
// });


// Send current time to all connected clients
function sendTime() {
    io.emit('time', { time: new Date().toJSON() });
}

// Send current time every 10 secs
setInterval(sendTime, 10000);

// Emit welcome message on connection
io.on('connection', function(socket) {
  console.log("new user!");

    // Use socket to communicate with this particular client only, sending it it's own id
    socket.emit('welcome', { message: 'Welcome!', id: socket.id });
    socket.on('i am client', console.log);
});
