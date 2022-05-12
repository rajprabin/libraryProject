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
    user:process.env.USER,
    pass:process.env.PASS
} 