const server = require('express')();
const axios = require('axios');


server.get('/',async (req,res) => {
    const result = await axios.get('http://localhost:4000/db'); 
    return res.send(result.data);
});

server.get('/differentroute',(req,res) => {
    return res.send("check");
})

server.listen(3000,() => {
    console.log("check1111");
});



