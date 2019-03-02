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



module.exports = {
    Query : {
        mails:() => mockMails,
        mail:(_,args) => mockMails[0]
    },
    Mutation : {
        mail:(_, args) => {
            mockMails[0] = args;
            return args;
        }
    }
}

