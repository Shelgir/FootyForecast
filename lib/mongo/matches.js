import clientPromise from ".";

let client;
let db;
let matches;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = client.db("FootyForecast");
    matches = db.collection("trained");
  } catch (error) {
    console.log("Error connecting to DB", error);
  }
}

(async function () {
  await init();
})();

export async function getMatches() {
  try {
    if (!matches) return { error: "Collection not found" };
    const matchesList = await matches.find({}).toArray();
    return { matchesList };
  } catch (error) {
    console.log("Error getting matches", error);
    return { error };
  }
}
