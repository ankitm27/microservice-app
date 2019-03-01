const server = require('express')();

server.get('/db',(req,res) => {
    const data = [{title:"check"}];
    return res.send(data);
});

server.listen(4000,() => {
    console.log("check1111");
})