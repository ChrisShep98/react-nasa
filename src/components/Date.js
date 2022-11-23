import React, { useRef, useState } from 'react'
import Button from './Button'

const Date = () => {

    const inputRef = useRef(null)
    const [picture, setPicture] = useState('')
    const [video, setVideo] = useState('')
    const [title, setTitle] = useState('')

    function getFetch(){

        fetch(`https://api.nasa.gov/planetary/apod?api_key=zU71SV2z8UAS2tpSRxtx9Ii4giGUAk6QIufK4bCn&date=${inputRef.current.value}`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if(data.media_type === 'image'){
              setPicture(data.hdurl)
            }else if(data.media_type === 'video'){
              setVideo(data.url)
            }
              setTitle(data.title)
          })
      }

  return (
    <div>
        <input className='bg-white hover:bg-gray-100 text-gray-800 font-semibold border border-gray-400 rounded shadow h-8' type='date' ref={inputRef}></input>
        <Button text={'Get Picture'} onClick={getFetch}></Button>
        
        <div className='w-96 h-96'>
          <h2>{title}</h2>
          <img className='object-fit' src={picture} alt=''></img>
          <iframe src={video} frameBorder={'0'} title={'video'}></iframe>
        </div>
    </div>
  )
}

export default Date