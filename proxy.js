const http = require('http');

function request(options) {
    return new Promise((resolve, reject) => {
        const req = http.request({
            method: options.method,
            host: options.host,
            port: options.port,
            path: options.path,
        })
        req.end();
        req.on('response', (res) => {
            res.on('data', (chunk) => {
                console.log(chunk.toString('utf8'), res.headers)
                resolve({ body: chunk.toString('utf8'), headers: res.headers })
            })
            res.on('error', (error) => {
                reject(error)
            })
        })
    })

}

// request({
//     methods: 'GET',
//     host: "api.jirengu.com",
//     port: 80,
//     path: "/getWeather.php",
// })

module.exports = request
