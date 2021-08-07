import React from 'react'
import MeetupItem from './MeetupItem'

const MeetupList = (props) => {

    return (
        <ul>
            {props.meetups.map(meetup => {
                return <MeetupItem
                key={meetup.id}
                id={meetup.id}
                title={meetup.title}
                address={meetup.address}
                image={meetup.image}
                />
            })}
        </ul>
    )
}

export default MeetupList
