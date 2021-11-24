let express = require("express");
let bodyParser = require("body-parser");

let server = express();

server.use(express.static(__dirname));
server.use(bodyParser.urlencoded({ 
    extended: true
}));
server.use(bodyParser.json());

server.get("/", function (request, response) {
    console.log('Server started!');
});

server.get("/userGet", function (request, response) {
    console.log(request.query);
    let obg = request.query;
    console.log(obg.userName += '.validatedByGet');
    console.log(obg.userAge += '.validatedByGet');
    console.log(obg.userAddress += '.validatedByGet');
    response.send('Data :' + JSON.stringify(obg));
    console.log('Data is loaded GET method');
});

server.post("/userPost", function (request, response) {
    console.log(request.body);
    let obg = request.body;
    console.log(obg.userName += '.validatedByPOST');
    console.log(obg.userAge += '.validatedByPOST');
    console.log(obg.userAddress += '.validatedByPOST');
    response.send('Data :' + JSON.stringify(obg));
    console.log('Data is loaded POST method');
});

server.listen(80);
