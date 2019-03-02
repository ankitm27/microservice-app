module.exports = (server) => {
    server.get("/",(_,res) => {
        return res.send("check1111");
    });
}