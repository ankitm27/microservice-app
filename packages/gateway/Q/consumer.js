const amqp = require('amqplib/callback_api');
const q = "test_q";

amqp.connect('amqp://epkulpjz:zd_RqGPiVpnuQgZLwV4tlj2AgvEIrPSH@termite.rmq.cloudamqp.com/epkulpjz',(err,conn) => {
    if(err){
        throw new Error(err);
    }
    conn.createChannel((err,ch) => {
        if(err){
            throw new Error(err);
        }
        ch.assertQueue(q,{durable:true});
        ch.consume(q,msg => {
            console.log("msg",msg.content.toString());
        },{noAck:true});
    })
})