const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req.method, ' ', req.url)
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
            console.log(data)
            console.log(email, ' - ',password);
            let body;

            if(email === 'user@email.com' && password === 'password'){
                body = {
                    token: 'access_token'
                }
                res.statusCode = 200;
            } else {
                body = {
                    error: 'invalid_credentials'
                };
                res.statusCode = 401;
            }

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(body));
        });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found')
    }
})

server.on('connection', () => {
  console.log('new client connection.');
});

server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});