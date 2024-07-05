import React from 'react'
import DotLoader from "react-spinners/DotLoader";
import './index.css'
const Preloader2 = () => {
    return (

        <>
            <div className='loader-container'>

                <div className='loader'>
                    <DotLoader color="#ffffff" />
                </div>
            </div>
        </>
    )
}

export default Preloader2;