import http from 'http'
const server = http.createServer(
    (req,res) => {
    const users = []
    const { url, method } = req
    if (method === 'GET' && url === '/users') {
        res
        .setHeader("Content-Type","application/json")
        .end(JSON.stringify(users))
    }  
    if(method === 'POST' && url === '/users') {
        res.end('put you users')
        users.push({
            id:1,
            name:'vitor',
            email:'vitor@web3dev.com'
        })
    }         
    }
)
server.listen(3030)