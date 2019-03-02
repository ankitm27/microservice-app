const server = require('express')();
const bodyParser = require('body-parser');

server
.use(bodyParser.json())
.get('/',(_,res) => {
    res.send("check");
})
.listen(3000,()=>{
    console.log("check123");
})