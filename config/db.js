const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
      
    });
    // const client = new MongoClient(MONGO_URI);
    // client.connect(err => {
    //   const collection = client.db("test").collection("devices");
    // });

    console.log(`Mongodb connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = dbConnect;
