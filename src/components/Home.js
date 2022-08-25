import React, { useState } from 'react'

function Home() {
    const [keyword, setkeyword] = useState("")
    const [imageUrl, setimageUrl] = useState("https://smallbusiness.com/wp-content/uploads/2014/01/search-magnifying-glass-icon-760x275-2.jpg")
    function copyImgAddress() {
        navigator.clipboard.writeText(imageUrl)
    }
    function handleOnChange(event) {
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
                <div className="row">
                    <div className="col">
                        <div className=" mt-2 alert alert-success alert-dismissible fade show" role="alert">
                            <strong>NOTE : </strong>Click on search multiple times for different results.
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="alert"
                                aria-label="Close"
                            />
                        </div>

                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-6 m-auto d-flex justify-content-between align-items-center">
                        <input value={keyword} className='w-75 rounded border-2 p-3 ' onChange={handleOnChange} placeholder='enter keyword' type="text" />
                        <button onClick={fetchApi} className='btn btn-dark'>Search</button>
                    </div>
                </div>
                <div className="row">
                    <div className=" col-md-6 m-auto ">

                        <img className='w-100 bg-dark p-3 rounded' src={imageUrl} alt="image" />
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