const Mail = require('./../dbUtil/Models/Mail.js');

const pingHandler = ( _,res) => {
    return res.send("check 1111");
}

const mailHandler = async(_,res) => {
    try{
        const mails = await Mail.find();
        return res.send({
            message:"got response from db",
            service:"databse service",
            status:200,
            payload:mails
        })
    }catch(err){
        return res.send({
            message:"got response from db",
            service:"database service",
            status:200,
            payload:err
        });
    }
}

const singleMailHandler = async({params:{id}},res) => {
    try{
        const mail = await Mail.findOne({_id:id});
        return res.send({
            message:"got response from db",
            service:"databse service",
            status:200,
            payload:mail
        })
    }catch(err){
        return res.send({
            message:"got response from db",
            service:"databse service",
            status:200,
            payload:err
        })
    }
}

module.exports = (server) => {
    server.get("/",pingHandler);
    server.get('/mails',mailHandler);
    server.get("/mails/:id",singleMailHandler);
}