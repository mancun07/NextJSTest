import React from 'react'
import classes from './MeetupItem.module.css'
import { useRouter } from 'next/router'

const MeetupItem = (props) => {

    const router = useRouter()

    const onClickHandler = () => {
        router.push(`/` + props.id)
        // console.log(1)
    }

    return (
        <div className={classes.item}>
            <div className={classes.image}>
                <img src={props.image} alt={props.title}/>
            </div>
            <div className={classes.content}>
                <h2>{props.title}</h2>
                <div>{props.address}</div>
            </div>
            <div className={classes.actions}>
                <button onClick={onClickHandler}>Show Details</button>
            </div>
        </div>
    )
}

export default MeetupItem
