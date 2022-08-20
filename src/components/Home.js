import React, { useState } from 'react'

function Home() {
    const [keyword, setkeyword] = useState("")
    const [imageUrl, setimageUrl] = useState("https://cdn-icons-png.flaticon.com/512/14/14562.png")
    function copyImgAddress() {
        navigator.clipboard.writeText(imageUrl)
    }
    function handleOnChange(event) {
        fetchApi();
        setkeyword(event.target.value)

    }

    async function fetchApi() {
        setimageUrl("https://cdn.dribbble.com/users/29051/screenshots/2347771/spinner.mov.gif")
        let data = await fetch(`https://source.unsplash.com/random/500×500/?${keyword}`)
        setimageUrl(data["url"])
    }


    return (
        <>
            <div className="container text-center">
                <div className="row my-3">
                    <div className="col-md-6 m-auto ">
                        <input value={keyword} className='w-75 rounded border-2 p-3 ' onChange={handleOnChange} placeholder='enter keyword' type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 m-auto ">
                        <img height="500px" className='bg-dark p-3 rounded' src={imageUrl} alt="image" />
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