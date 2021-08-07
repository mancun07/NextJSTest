import React from 'react'
import classes from './MainNavigation.module.css'
import Link from 'next/link'

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                React Meetups
            </div>
            <ul>
               <li><Link href="/">All Meetups</Link></li> 
               <li><Link href="/new-meetup">Add New Meetup</Link></li> 
            </ul>
        </header>
    )
}

export default MainNavigation
