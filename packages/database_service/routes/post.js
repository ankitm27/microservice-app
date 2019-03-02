const Mail = require('./../dbUtil/Models/Mail.js');

const mailHandler = ({body:{subject,receiver,content}},res) => {
    if(!subject || !receiver || !content){
        return res.sendStatus(400).send({
           message:"please send all the keys",
           service:"database service",
           status:400,
           payload:null
        });
    }
    try{
        const mail = new Mail({
            subject:subject,
            receiver:receiver,
            content:content
        });
        mail.save();
        return res.send({
            message:"successfully data added",
            serivce:"database service",
            status:200,
            payload:mail
        })
    }catch(err){
        console.log("err",err);
        return res.send({
            message:"error in adding data",
            service:"database service",
            status:200,
            payload:err
        })
    }
}

module.exports = (server) => {
    server.post('/mails',mailHandler);
}