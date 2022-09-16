const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our homePage')
    }
    if(req.url === '/about'){
        res.end('Welcome to our about')
    }
    res.end(`
    <h1>Oops!</h1>
    <a href="/">Back to homepage</a>
    `)    
})

server.listen(5000)