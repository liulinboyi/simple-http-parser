const http = require('http');
const request = require('./proxy.js');
const server = http.createServer(async (req, res) => {
    console.log('接受到请求')
    console.log(req.headers, '请求')
    // res.setHeader('Content-Type', 'text/html');
    // res.setHeader('X-Foo', 'bar');
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    let body = await request({
        methods: 'GET',
        host: "api.jirengu.com",
        port: 80,
        path: "/getWeather.php",
    })
    Object.keys(body.headers).forEach(item => {
        res.setHeader(item, body.headers[item])
    })
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(
        // `hello http 哈哈`
        JSON.stringify(body.body)
    )
});
server.listen(8080, () => {
    console.log(`120.0.0.1:8080`)
})