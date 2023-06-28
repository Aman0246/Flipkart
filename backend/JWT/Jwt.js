var jwt = require('jsonwebtoken');
require("dotenv").config()

const createJwt=(payload)=>{
    var token = jwt.sign(payload, process.env.SECERATEKEY,{ expiresIn: '1h' });
    return token
 
}




module.exports={createJwt}