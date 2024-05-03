// console.log("Implement servermu disini yak 😝!");

const http = require('http');
const carController = require('../public/scripts/controller/carController');
const  url = require('url');



const onRequest = (req, res) =>{

    const parsedUrl = url.parse(req.url, true); // Parse URL dan sertakan pengelolaan query string
    const path = parsedUrl.pathname; // Gunakan pathname untuk mengabaikan query strings dalam path
    const method = req.method;
    const query = parsedUrl.query;

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    if (method === 'GET' && path === '/cars') {
        carController.getAllCars(req, res);
    }
    else if (method === 'GET' && path === '/cars/filter') {
        carController.getAllCarsByFilter(req, res, query);
    }

    else {
        res.writeHead(404);
        res.end('Not Found');
    }
}

const server = http.createServer(onRequest)

server.listen(8000, 'localhost', ()=>console.log('Server is Running'))

//get list people : /people
//get detail people : /people/1
//delete people :  /people/1