import React, {useRef} from 'react'
import classes from './NewMeetupForm.module.css'

const NewMeetupForm = (props) => {
    const titleRef = useRef('')
    const addressRef = useRef('')
    const imageRef = useRef('')
    const descRef = useRef('')

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const titleRefValue = titleRef.current.value;
        const addressRefValue = addressRef.current.value;
        const imageRefValue = imageRef.current.value;
        const descRefValue = descRef.current.value;

        props.fetchDBRequest({title: titleRefValue, address: addressRefValue, image: imageRefValue, description: descRefValue})
    }

    return (
        <form className={classes.form} onSubmit={onSubmitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text" id="title" ref={titleRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Meetup address</label>
                <input type="text" id="address" ref={addressRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Meetup Image</label>
                <input type="text" id="image" ref={imageRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="desc">Meetup Description</label>
                <input type="text" id="desc" ref={descRef}/>
            </div>
            <div className={classes.actions}>
                <button>Add New Meetup</button>
            </div>
        </form>
    )
}

export default NewMeetupForm
