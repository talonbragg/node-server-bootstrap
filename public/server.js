// Request protocol
var http = require("http");
// Request server
var server = http.createServer(function(request, response){
  // Write crap on local server
  response.writeHead(200, {"Content-Type": "text/html" })
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Vanilla Test Server</title>");
  response.write("<link rel='stylesheet.css'>");
  response.write("</head>");
  response.write("<body>");
  response.write("<center><h1>Test Vanilla Server</h1></center>");
  response.write("<br>");
  response.write("<p>Test vanilla server for NodeJS application</p>");
  response.write("<br><br><br>");
  response.write("</body>");
  response.write("</html>");
  // End crap on local server
  response.end();
});

// Publish to localhost
server.listen(5000);
// Peace of mind
console.log("Ooo ja. The server is ONLINE!!! Doot doot.")
