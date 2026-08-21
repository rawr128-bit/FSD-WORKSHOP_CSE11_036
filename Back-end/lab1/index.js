import EventeEmitter from "node:events";
const myEmitter = new EventeEmitter();
myEmitter.on("greet" , (teacher) => {
    console.log(`class started by ${teacher}`) ;
});
myEmitter.on("exit" , (teacher) => {
    console.log(`class finisdhe by ${teacher}`) ;
});

myEmitter.emit("greet" , "teacher name") ;
myEmitter.emit("exit" , "2nd teacher name") ;