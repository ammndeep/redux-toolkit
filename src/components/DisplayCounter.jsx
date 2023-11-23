import React from 'react'
import { useSelector } from 'react-redux'

const DisplayCounter = () => {
    const { counterVal } = useSelector(store => store.counter);

    return (
        <p className='lead-mb-4 display-6 text-success'>
            <b>Counter Current Value is {counterVal}</b>
        </p>
    )
}

export default DisplayCounter
