import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://shelgir:footyforecast00@footyforecast.djopw0p.mongodb.net/?retryWrites=true&w=majority";
const options = {};

if (!URI) {
  throw new Error(
    "Please define the MONGO_URI environment variable inside .env.local"
  );
}

let client = new MongoClient(URI, options);
let clientPromise;

if (process.env.NODE_ENV !== "production") {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }

  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = client.connect();
  console.log(clientPromise);
}

export default clientPromise;
