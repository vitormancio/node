import http from 'http'

const server = http.createServer(
    (req,res) => {
        res.end('Fucking do it, lets goo')
    }
)

server.listen(3030)