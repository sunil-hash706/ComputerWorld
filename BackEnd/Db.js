const mongoose = require('mongoose');


async function connectToMongo() {
  await mongoose.connect('mongodb+srv://sunil-kumar:sunilkumarachra@cluster0.z0shg.mongodb.net/UsersDb');
}
connectToMongo().catch(err => console.log(err));

module.exports = connectToMongo;