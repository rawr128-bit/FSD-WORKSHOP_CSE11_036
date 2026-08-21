// const request 
import http from "http"
const server = http.createServer((req, res) => {
    res.write("hello world ")
});

server.listen(3000 , ()=>{
    console.log("server is running on port 3000");
});