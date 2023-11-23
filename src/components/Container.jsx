import React from 'react'
import { useSelector } from 'react-redux';

const Container = ({ children }) => {
    const darkMode = useSelector(store => store.darkMode);
    return (
        <div className={`card px-5 pb-5 ${darkMode ? 'Dark-mode' : 'Light-mode'}`} style={{ width: "70rem" }}>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}

export default Container
