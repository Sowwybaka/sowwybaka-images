import React, { useState } from 'react'
import Image from './Image'
function Home(props) {
    const [imageUrl, setimageUrl] = useState("https://smallbusiness.com/wp-content/uploads/2014/01/search-magnifying-glass-icon-760x275-2.jpg")
    const [images, setimages] = useState([])
    let convertedData = ""
    async function searchImages(key) {
        let data = await fetch(`https://api.unsplash.com/search/photos/?query=${key}&client_id=hVqbao7D7S3LUROjlXBdOpEgmZCBKj8OjdKcmZ-AU1k`)
        let convertedData = await data.json()
        setimages(convertedData.results)
    }

    function handleOnChange(event) {
        searchImages(event.target.value)

    }




    return (
        <>
            <div className={`container-fluid h-100 text-center bg-${props.theme}`}>
                <div className="row">
                    <div className="col">
                        <div className=" mt-2 alert alert-success alert-dismissible fade show" role="alert">
                            <strong>NOTE : </strong>You will get images related to your keyword.
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
                        <input className='w-75 rounded border-2 p-3 ' onChange={handleOnChange} placeholder='enter keyword' type="text" />
                    </div>
                </div>
                <div className="row">
                    {
                        images.map((element, index) => {
                            return <Image image={element.urls.regular} key={index} />
                        })
                    }
                </div>
            </div >
        </>
    )
}

export default Home