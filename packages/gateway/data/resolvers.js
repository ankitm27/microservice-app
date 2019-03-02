const axios = require('axios');

const mockMails = [{
    subject:"my first email",
    receiver:"check@check.com",
    content:"check"
},{
    subject:"my first email1",
    receiver:"check1@check.com",
    content:"check1"
},{
    subject:"my first email2",
    receiver:"check2@check.com",
    content:"check2"
}];

const getMails = async () => {
    // const result = (await axios.get('http://localhost:4000/mails'));
    // console.log("result",result);
    const mails = (await axios.get('http://localhost:4000/mails')).data.payload;
    // console.log("mails",mails);
    return mails;
}

module.exports = {
    Query : {
        mails:() => getMails(),
        mail:(_,args) => mockMails[0]
    },
    Mutation : {
        mail:(_, args) => {
            mockMails[0] = args;
            return args;
        }
    }
}

