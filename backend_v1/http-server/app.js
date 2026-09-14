const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.method === 'GET' && req.url === '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        // res.write("Hello World");
        res.end("Hello World");
    } 
    else if(
        req.method==='POST' && 
        req.url === '/login' && 
        req.headers['content-type'] === 'application/json'
    ){
        let data = '';

        req.on('data', (chunk) => {
            data +=chunk;
        });

        req.on('end', () => {
            const {email, password} = JSON.parse(data);
        })
    }
})

server.on('connection', () => {
  console.log('new client connection.');
});

server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});