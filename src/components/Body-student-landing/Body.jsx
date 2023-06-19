import React, { useState } from 'react'
import Nav from '../Navbar-student-landing/Navbar'
import Upcoming from './Upcoming'
import Attempted from './Attempted'
import Missed from './Missed'

const Body = () => {

    const [display, setDisplay] = useState(<Upcoming />)
    const getPageDetails = (page) => {
        if (page === 'Upcoming')
            setDisplay(<Upcoming />)
        else if (page === 'attempted')
            setDisplay(<Attempted />)
        else if (page === 'missed')
            setDisplay(<Missed />)
    }
    return (
        <>
            <Nav getPageDetails={getPageDetails} />
            {display}
        </>
    )
}

export default Body