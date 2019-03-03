const { PORT,Q_URI } = process.env;
module.exports = {
    port : PORT || 5000,
    q:{
        uri:Q_URI || "amqp://epkulpjz:zd_RqGPiVpnuQgZLwV4tlj2AgvEIrPSH@termite.rmq.cloudamqp.com/epkulpjz"
    }
}