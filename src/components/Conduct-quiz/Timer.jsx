import React, { useEffect } from 'react'
import { useRef, useState } from 'react'

const Timer = (props) => {

    const timeStart = "2023-07-03T23:07:00+05:30"
    const timeEnd = "2023-07-04T12:40:00+05:30"
    const endMiliSec = Date.parse(timeEnd);
    const startMiliSec = Date.parse(timeStart);
    const timerId = useRef();
    const time = useRef((Date.now() - startMiliSec) / 1000);
    const [seconds, setSeconds] = useState((endMiliSec - Date.now()) / 1000);
    const [mins, setMin] = useState(0);
    const [hours, setHours] = useState(0);


    {
        useEffect(() => {
            timerId.current = setInterval(() => {
                // time.current--;
                setSeconds(seconds => seconds - 1);
            }, 1000)

        }, [])
    }

    const stopTimer = () => {
        clearInterval(timerId.current);
        timerId.current = 0;
    }
    var unhi;

    return (
        <>

            {(seconds) <= 0 ? stopTimer() : unhi = null}
            time:{Math.floor(seconds)}
        </>
    )
}

export default Timer