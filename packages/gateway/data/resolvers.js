const axios = require('axios');
const { serviceDatabase : { port } } = require('./../config/index.js');

const { pushToMessageQ } = require('./../Q/connect.js')

const hostName = "http://localhost";
const databaseURL = `${hostName}:${port}`;

const getMails = async () => {
    // const result = (await axios.get('http://localhost:4000/mails'));
    // console.log("result",result);
    const mails = (await axios.get(`${databaseURL}/mails`)).data.payload;
    // console.log("mails",mails);
    return mails;
}

const getSingleMail = async(id) => {
    console.log("id",id);
    const mail = (await axios.get(`${databaseURL}/mails/${id}`)).data.payload;
    console.log("mail",mail);
    return mail;
}

const postSingleMail = async(body) => {
    const postedMail = (await axios.post(`${databaseURL}/mails`,{ ...body })).data.payload;
    console.log("posted mail",postedMail);
    return postedMail;
}

module.exports = {
    Query : {
        mails:() => getMails(),
        mail:(_,{id}) => getSingleMail(id)
    },
    Mutation : {
        mail:(_, args) => {
        let result;
        let error;
        try{
            result = postSingleMail(args);
            console.log("result",result);
        }catch(err){
            error = err;       
        }
        pushToMessageQ(JSON.stringify(args));
        
        return result || error; 
    }
    }
}

