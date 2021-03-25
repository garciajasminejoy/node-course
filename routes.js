const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html><head><title>Enter Message</title></head><body><h1>Hello there!</h1><br/><form method="POST" action="/create-user"><input type="text" name="username"/><button type="submit">Add user</button></form></body></html>');
        return res.end();
    }

    if (url === '/users' && method === 'GET') {
        res.write('<html><head><title>Users</title></head><body><ul><li>Jasmine</li><li>Joy</li></ul></body></html>');
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>My FirstPAge</title></head><body>hello from my node.js server!</body></html>');
    res.end();    
};

module.exports = {
    handler: requestHandler,
    someText: 'some hardcode text'
};