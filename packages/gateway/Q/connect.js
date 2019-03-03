const amqp = require('amqplib/callback_api');

const q = "test_q";
let channel;

amqp.connect('amqp://epkulpjz:zd_RqGPiVpnuQgZLwV4tlj2AgvEIrPSH@termite.rmq.cloudamqp.com/epkulpjz',(err,conn) => {
    if(err){
        throw new Error(err);
    }
    conn.createChannel((err,ch) => {
        if(err){
            throw new Error(err)
        }
        ch.assertQueue(q,{ durable:true });
    
        ch.sendToQueue(q, Buffer.from("check1234"));
    });
  
    setTimeout(() => {
        conn.close();
        process.exit(0);
    },1000);

});