import React /*, { Component }*/ from 'react'
import loading from './ZKZg.gif'
const Spinner=()=>{
        return (
            <div className='text-center'>
                <img className="my-3"src={loading} alt="loading" width="50px" height="50px"/>
            </div>
        )
}
export default Spinner