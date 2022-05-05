const mongoose = require('mongoose')


async function connect(){
    await mongoose.connect('mongodb://localhost:27017/example_db')
            .then(console.log('Connect to database successfully'))
            .catch(err=>console.log('Failed to connect to database. Error:'+err.message))

}
module.exports = {connect}