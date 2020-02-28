var http = require('http');

function onRequest(request, response){
    console.log("A user made a request" + request.url);
    response.writeHead(200, {"Context-Type": "Text/plain"});
    response.write('<html><body><h1>Hello World!</h1><div>This is a Test</div></body></html>');
    response.end();
}

http.createServer(onRequest).listen(8888);