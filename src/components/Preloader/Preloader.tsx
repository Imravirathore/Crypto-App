import React from 'react'
import HashLoader from "react-spinners/HashLoader";
import './index.css'
const Preloader = () => {
    return (

        <>
            <div className='loader-container'>

                <div className='loader'>
                    <HashLoader  color="#ffffff"  />
               </div>
            </div>
        </>
    )
}

export default Preloader;