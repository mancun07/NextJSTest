// POST api/new-meetup
import {MongoClient} from 'mongodb'

async function handler(req, res) {
    if (req.method === 'POST') {
        
        const data = req.body;

        const client = await MongoClient.connect(`mongodb+srv://dimaninja:Leather2018Jackets@cluster0.op8yb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)

        const db = client.db()

        const meetupsCollection = db.collection('meetups')

        const result = await meetupsCollection.insertOne(data)

        client.close()

        res.status(201).json({message: 'New record is added'})

    }
}

export default handler



