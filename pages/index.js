import React, {Fragment} from 'react'
import MeetupList from '../components/meetups/MeetupList'
import {MongoClient} from 'mongodb'
import Head from 'next/head'


const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.op8yb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const HomePage = (props) => {
    return (
        <Fragment>
            <Head>
                <title>First Next App</title>
                <meta content={props.title}/>
            </Head>
            <MeetupList meetups={props.meetups}/>
        </Fragment>
    )
}

export const getStaticProps = async () => {
    // fetch data
    const client = await MongoClient.connect(url);
    const db = client.db();
    const meetups = db.collection('meetups')

    const loadedMeetups = await meetups.find().toArray();
    client.close();

    return {
        props: {
            meetups: loadedMeetups.map(el => ({
                title: el.title,
                address: el.address,
                image: el.image,
                description: el.description,
                id: el._id.toString()
            }))
        },
        revalidate: 1
    }

}

export default HomePage
