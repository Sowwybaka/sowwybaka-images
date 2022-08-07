import React, { useState } from 'react'

function Home() {
    const [imgUrl, setimgUrl] = useState("welcome")
    function getImage() {
        const url = `https://source.unsplash.com/random/900×700/?${imgUrl}`
    }
    function handleOnChange(event) {
        setimgUrl(event.target.value)

    }
    getImage()
    return (
        <>
            <div className="container text-center">
                <div className="row my-3">
                    <div className="col-md-6 m-auto ">
                        <input value={imgUrl} className='w-75 rounded border-2 p-3 ' onChange={handleOnChange} placeholder='Search for Image' type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 m-auto ">
                        <img className='w-100' src={`https://source.unsplash.com/random/900×700/?${imgUrl}`} alt="image" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home