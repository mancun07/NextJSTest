import {Fragment} from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import {useRouter} from 'next/router'


const NewMeetupFormPage = () => {
    const router = useRouter();

    const onFetchHandler = async (newObj) => {
        const response = await fetch(`/api/new-meetup`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newObj)

        })
        const data = await response.json();
        router.push('/');
        
    }

    return (
        <Fragment>
            <NewMeetupForm fetchDBRequest={onFetchHandler}/>  
        </Fragment>
    )
}



export default NewMeetupFormPage
