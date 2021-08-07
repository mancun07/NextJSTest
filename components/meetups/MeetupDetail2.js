import React, {Fragment} from 'react'
import classes from './MeetupDetails.module.css'

const MeetupDetails = (props) => {
    return (
        <section className={classes.details}>
            <img src={props.image} alt={props.title} />
            <div>{props.title}</div>
            <div>{props.address}</div>
        </section>
    )
}

export default MeetupDetails
