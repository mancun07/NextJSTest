import React from 'react'
import {MongoClient} from 'mongodb'

const url = `mongodb+srv://dimaninja:Leather2018Jackets@cluster0.op8yb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const fetchHandler = async (req, res) => {

    if (req.method === 'POST') {

    const newMeetup = req.body;

    const client = await MongoClient.connect(url);
    const db = client.db();
    const meetups = db.collection('meetups');

    const meetupCollection =  await meetups.insertOne(newMeetup)
    client.close();

    const result = res.status(201).json({message: 'New Meetup has been added'})
    console.log(result)

    }

}

export default fetchHandler