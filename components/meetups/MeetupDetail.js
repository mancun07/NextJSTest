import React from 'react'
import classes from './MeetupDetails.module.css'
import Link from 'next/link'

const MeetupDetail = (props) => {
    return (
        <div className={classes.details}>
            <Link href="/"><button className={classes.button}>Back to home page</button></Link>
            <img src={props.meetup.image} alt={props.title} />
            <div>{props.meetup.title}</div>
            <div>{props.meetup.address}</div>
        </div>
    )
}

export default MeetupDetail
