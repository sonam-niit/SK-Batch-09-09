const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017/';

// MongoClient.connect(uri)
// .then(resp=>console.log('Connected'))
// .catch(err=>console.log('Error',err))

async function main() {
    try {
        const client = await MongoClient.connect(uri);
        console.log('Connected');
        const db = client.db('skillacademy');
        const collection = db.collection('student');
        const insertResult = await collection.insertOne
        ({name:'krizel',email:'krizzu@gmail.com',country:'India'});
        console.log('Inserted documents =>', insertResult);
    } catch (error) {
        console.log('Error', error)
    }
}
main();