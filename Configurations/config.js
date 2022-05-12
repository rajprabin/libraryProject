const dotenv = require('dotenv')

dotenv.config()


module.exports = {
    port:process.env.PORT,
    uri:process.env.URI,
    secretkey:process.env.SECRETKEY,
    Url:`http://localhost:3000/api`,
    email:`pravinrjpravin@gmail.com`,
    host: 'smtp.gmail.com',
    service: 'gmail',
    user:'exdrs.emp.0032.rajprabin@gmail.com',
    pass:'Rajprabin@16'
} 