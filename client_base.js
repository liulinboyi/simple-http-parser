const net = require('net');
const client = net.createConnection({ port: 8080 }, () => {
    // 'connect' 监听器
    console.log('已连接到服务器');
    let req = `GET / HTTP/1.1\r
Host: 127.0.0.1:8080\r
Connection: keep-alive\r
Cache-Control: max-age=0\r
Upgrade-Insecure-Requests: 1\r
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36 Edg/86.0.622.61\r
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9\r
Sec-Fetch-Site: none\r
Sec-Fetch-Mode: navigate\r
Sec-Fetch-User: ?1\r
Sec-Fetch-Dest: document\r
Accept-Encoding: gzip, deflate, br\r
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6\r
\r
`
    console.log(req)
    client.write(req);
});
client.on('data', (data) => {
    console.log(data.toString());
    client.end();
});
client.on('end', () => {
    console.log('已从服务器断开');
});
client.on('error', (error) => {
    console.log(error)
})