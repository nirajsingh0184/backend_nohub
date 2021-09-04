const mongoose = require('mongoose');
const config = require('config');
const db = config.get('name');

const connectDb = async () => {
    try {

        await mongoose.connect(db, {

            useNewUrlParser: true,
           

        });
        console.log('MongoDb Connected');

    } catch(err) {
        console.log('Mongodb not connected', err);
        process.exit(1);
    }
}

module.exports=connectDb
