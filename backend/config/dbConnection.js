const mongoose = require('mongoose')

const dbConnection = async ()=>{

    const connect = await mongoose.connect(process.env.DB_URI);
    // return connect
}

module.exports = {dbConnection};