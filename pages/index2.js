import {Fragment} from 'react'
import Head from 'next/head';
import {MongoClient} from 'mongodb'
import MeetupList from '../components/meetups/MeetupList'




// const DummyMeetups = [
// {
//     id: 'm1',
//     title: 'This is a meetup 1',
//     address: 'Address 123',
//     image: 'https://i.pinimg.com/originals/24/97/12/2497128c6cf4e7b7a686c94a5cf09e31.jpg'
// },

// {
//     id: 'm2',
//     title: 'This is a meetup 2',
//     address: 'Address 456',
//     image: 'https://i.pinimg.com/originals/24/97/12/2497128c6cf4e7b7a686c94a5cf09e31.jpg'
// },

// ]

const url = `mongodb+srv://dimaninja:Leather2018Jackets@cluster0.op8yb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

function HomePage(props) {

  console.log('Hello from NewMeetup')

  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly active React meetups!'
        />
    </Head>
        <MeetupList meetups={props.meetups} />;
    </Fragment>
  )
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(url);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}


export default HomePage;

