import React from 'react'

function Image(props) {
    function copyImgAddress() {
        navigator.clipboard.writeText(props.image)
    }
    return (
        <div className="col-4 p-2 "><img className='w-100' src={props.image} alt="" /><button onClick={copyImgAddress} className='btn btn-dark m-1'>copy image address</button></div>
    )
}

export default Image