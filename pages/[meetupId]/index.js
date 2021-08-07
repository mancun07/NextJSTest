import React from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail'
import {MongoClient, ObjectId} from 'mongodb'

// const DummyData = 
//     {
//         id: '1',
//         title: 'First Meetup',
//         address: 'Gazprom Arena Staduim',
//         description: 'This is our stadium',
//         image: 'https://i.pinimg.com/originals/24/97/12/2497128c6cf4e7b7a686c94a5cf09e31.jpg'
//     }

const url = `mongodb+srv://dimaninja:Leather2018Jackets@cluster0.op8yb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const SingleMeetupPage = (props) => {
    return (
        <div>
            <MeetupDetail meetup={props.meetup}/>
        </div>
    )
}

export const getStaticPaths = async () => {
    const client = await MongoClient.connect(url);
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();
    client.close();

    return {
        fallback: false,
        paths: meetups.map(el => ({
            params: {meetupId: el._id.toString()} 
        }))
    }

}

export const getStaticProps = async (req, res) => {

    const meetupId = req.params.meetupId;

    // fetch data
    const client = await MongoClient.connect(url);
    const db = client.db();
    const meetupCollection = db.collection('meetups');

    const selectedMeetup = await meetupCollection.findOne({
        _id: ObjectId(meetupId)
    })
    client.close();

    return {
        props: {
            meetup: {
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
                id: selectedMeetup._id.toString()
            }
        }
    }


}

export default SingleMeetupPage
