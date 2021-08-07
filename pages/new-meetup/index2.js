import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewMeetup = () => {

    console.log('Hello from NewMeetup')

    const onAddMeetupHandler = async (newMeetup) => {
        const response = await fetch(`./api/new-meetup`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newMeetup)
        })

        const result = response.json()
    }

    return (
        <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
    )
}

export default NewMeetup
