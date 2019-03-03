const amqp = require('amqplib/callback_api');
const {q:{uri}} = require('./../config/index.js');


module.exports = () => {
const q = "test_q";

amqp.connect(uri,(err,conn) => {
    if(err){
        throw new Error(err);
    }
    conn.createChannel((err,ch) => {
        if(err){
            throw new Error(err)
        }
        ch.assertQueue(q,{ durable:true });
    
        // ch.sendToQueue(q, Buffer.from("check1234"));
        channel = ch;
        ch.consume(q,msg => {
            let mail;
            try{
                mail = JSON.parse(msg.content.toString());
            }catch(err){
                console.log("err",err);
                mail = msg.content;
            }
            console.log("mail",mail);
            ch.ack(msg);
        },{noAck:true});

    });
});

}