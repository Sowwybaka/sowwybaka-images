import React, { useState } from 'react'

function Home() {
    const [keyword, setkeyword] = useState("welcome")
    const [imageUrl, setimageUrl] = useState("")
    function copyImgAddress() {
        setimageUrl(`https://source.unsplash.com/random/500×500/?${keyword}`)
        navigator.clipboard.writeText(imageUrl)
    }
    function handleOnChange(event) {
        setkeyword(event.target.value)

    }


    return (
        <>
            <div className="container text-center">
                <div className="row my-3">
                    <div className="col-md-6 m-auto ">
                        <input value={keyword} className='w-75 rounded border-2 p-3 ' onChange={handleOnChange} placeholder='Search for Image' type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 m-auto ">
                        <img height="500px" className='bg-dark p-3 rounded' src={`https://source.unsplash.com/random/500×500/?${keyword}`} alt="image" />
                    </div >
                </div >
                <div className="row">
                    <div className="col">
                        <button className="btn-danger btn my-2" onClick={copyImgAddress}>Copy Image Address</button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Home