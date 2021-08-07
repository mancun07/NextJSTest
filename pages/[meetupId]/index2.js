import {MongoClient, ObjectId} from 'mongodb'
import MeetupDetail from '../../components/meetups/MeetupDetail'

const url = `mongodb+srv://dimaninja:Leather2018Jackets@cluster0.op8yb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

function MeetupDetails(props) {

  // const {meetupData} = props;
    return (
      <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
        // image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
        // title='First Meetup'
        // address='Some Street 5, Some City'
        // description='This is a first meetup'
      />
    );
  }

  export async function getStaticPaths() {

      const client = await MongoClient.connect(url)
      const db = client.db()
      const meetupsCollection = db.collection(`meetups`)
      const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();
      client.close()

    return {
      fallback: true,
      paths: meetups.map(meetup => ({
          params: {meetupId: meetup._id.toString() }
      }))

    };
  }
  
  export async function getStaticProps(context) {
    // fetch data for a single meetup
  
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(`mongodb+srv://dimaninja:Leather2018Jackets@cluster0.op8yb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
  const db = client.db()
  const meetupsCollection = db.collection(`meetups`)
  const oneMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId)
  })

  client.close()
  
  
  
    return {
      props: {
        meetupData: {
          image: oneMeetup.image,
          title: oneMeetup.title,
          address: oneMeetup.address,
          description: oneMeetup.description,
          id: oneMeetup._id.toString(),
        },
      },
    };
  }
  
  export default MeetupDetails;
