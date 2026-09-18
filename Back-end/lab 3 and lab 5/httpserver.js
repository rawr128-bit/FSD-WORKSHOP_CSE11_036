// // // // const request 
// // // import http from "http"
// // // const server = http.createServer((req, res) => {
// // //     res.write("hello world ")
// // //     res.end();
// // // });

// // // server.listen(3001, ()=>{
// // //     console.log("server is running on port 3001");
// // // });

// // // //localhost:3001/


// // // const url = req.url 
// // // const method = req.method 

// // // if(url== "/msg" && method==("get") $ {port} )


// // import http from "http";

// // const server = http.createServer((req, res) => {

// //     res.write("Hello World");

// //     const url = req.url;
// //     const method = req.method;

// //     if (url === "/msg" && method === "GET") {

// //         res.write("   This is the msg server page");
// //         res.statusCode = 200 ;
// //         res.setHeader("Content-Type" , "text/plain") ;
// //         res.end("welcm to backend") ;

// //     }

// //     // res.end();
    
// // });

// // server.listen(3000, () => {

// //     console.log("Server is running on port 3000");

// // });

// import http from "http";
// //const users = ["Abhinav", "Rahul", "Aman", "Rohit"];
// const userdata = {
//     id: 2503201000036,
//     name: "abhinav",
//     class: "cse-11",
//     reg:"newdata" 
// };

// const newdata = {
//     id:userdata.id ,
//     name:userdata.name ,
//     class:userdata.class ,
//     reg : userdata.reg  
// };
// // export default users;
// const server = http.createServer((req, res) => {

//     const url = req.url;
//     const method = req.method;

//     if (url == "/msg" && method == "GET") {

//         res.statusCode = 200;
//         res.setHeader("Content-Type", "text/plain");

//         res.end(" wlcm to backend");

//     }
//     else if(url == "/cis" && method == "GET"){
//         res.statusCode = 200 ;
//         res.setHeader("Content-Type" , "application/json") ;
//         //res.end(JSON.stringify(users)) ;
//         res.end(JSON.stringify(userdata)) ;
//     }
//     // else if(url == "/create" && method == "POST"){
//     //     let body = " " ;
//     //     req.on("data" , content=>{
//     //         body = body + content ; 
//     //     })
//     //     const method = req.method ;

//     // }

//     else if (url === "/create" && method === "POST") {

//     let body = "";

//     req.on("data", chunk => {
//         body += chunk;
//     });

//     req.on("end", () => {

//         const newdata = JSON.parse(body);

//         res.statusCode = 201;
//         res.setHeader("Content-Type", "application/json");

//         res.end(JSON.stringify(newdata));
//     });
//     }
//     else {

//         res.statusCode = 404;
//         res.setHeader("Content-Type", "text/plain");

//         res.end("not found");
//     }

// });

// const server = http.createServer(async(req,res)=>{
//     const sysdata = {
//         cpu: os.cpus().length,
//         ip:os.newworkINterfaces() ,
//         totalmemory 
//         free memory 
//     }
// };)
// res.end(JSON.stringify(sysdata)) ;
// else if(url =="/users" && method  = "get"){
//     else if(url.startswith("/users/") && method == "GET"{
//         const id = url.split("/")[2] ;
//     })
//     console.log(id);
//     const user = userdata.find((u)=> u.id == id);
//     if(!user){
//         return res.end("user not found") ;
//     }
//     res.end(JSON.stringify(user));
// }else if(url == "/create")

// server.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });












import http from "http";
import os from "os";


const userdata = [
    {
        id: 1,
        name: "Abhinav",
        class: "CSE-11",
        reg: "newdata"
    },
    {
        id: 2,
        name: "Rahul",
        class: "CSE-11",
        reg: "olddata"
    },
    {
        id: 3,
        name: "Aman",
        class: "CSE-11",
        reg: "newdata"
    }
];


const server = http.createServer((req, res) => {

    console.log("REQUEST RECEIVED:", req.url, req.method);

    const url = req.url;
    const method = req.method;


  
    if (url === "/msg" && method === "GET") {

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");

        res.end("Welcome to backend");
    }


    
    else if (url === "/cis" && method === "GET") {

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");

        res.end(JSON.stringify(userdata));
    }


    
    else if (url === "/sysdata" && method === "GET") {

        const sysdata = {

            cpu: os.cpus().length,

            ip: os.networkInterfaces(),

            totalMemory: os.totalmem(),

            freeMemory: os.freemem()
        };

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");

        res.end(JSON.stringify(sysdata));
    }


    else if (url === "/users" && method === "GET") {



        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");

        res.end(JSON.stringify(userdata));
    }


    else if (url.startsWith("/users/") && method === "GET") {

         console.log("USERS ID ROUTE ENTERED");

        const id = Number(url.split("/")[2]);

        console.log(id);

        const user = userdata.find((u) => u.id === id);

        if (!user) {

            res.statusCode = 404;

            return res.end("User not found");
        }

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");

        res.end(JSON.stringify(user));
    }


    
    else if (url === "/create" && method === "POST") {

        let body = "";

        req.on("data", (chunk) => {

            body += chunk;
        });


        req.on("end", () => {

            try {

                const newdata = JSON.parse(body);

                userdata.push(newdata);

                res.statusCode = 201;

                res.setHeader(
                    "Content-Type",
                    "application/json"
                );

                res.end(JSON.stringify(newdata));

            }
            catch (error) {

                res.statusCode = 400;

                res.end("Invalid JSON");
            }

        });
    }

    // else if(url.startsWith("/delte/") && method =="DELETE"){
    //     const id = url.split("/")[2] ;
    //     const index = userdata.findIndex((u) => u.id == id) ;
    //     if(index== -1){
    //         return res.end("elemnt not found") ;
    //     }

    //     userdata.splice(index,1) ;
    //     res.end("user delted successfully")  ;
    // }
    

    else if (url.startsWith("/delete/") && method === "DELETE") {

    const id = Number(url.split("/")[2]);

    const index = userdata.findIndex((u) => u.id === id);

    if (index === -1) {
        res.statusCode = 404;
        return res.end("User not found");
    }

    userdata.splice(index, 1);

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");

    res.end("User deleted successfully");
}
else if(url.startsWith("/put") && method ==="")


    
    else {

        res.statusCode = 404;

        res.setHeader("Content-Type", "text/plain");

        res.end("Not Found");
    }

});


server.listen(3000, () => {

    console.log("Server is running on port 3000");

});

