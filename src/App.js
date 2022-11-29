import React, { useRef, useState } from 'react'
import Button from './components/Button'
// import Date from './components/Date'

function App() {

  const inputRef = useRef(null)
    const [picture, setPicture] = useState('')
    const [video, setVideo] = useState('')
    const [title, setTitle] = useState('')
    const [explanation, setExplanation] = useState('')

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
              setExplanation(data.explanation)
          })
      }

  return (
    <div className='container mx-auto flex justify-center items-center'>
      <div className='text-center mt-24 border'>
        <h1>Astronomy Picture of the Day</h1>
        <div>
        <input className='bg-white hover:bg-gray-100 text-gray-800 font-semibold border border-gray-400 rounded shadow h-8' type='date' ref={inputRef}></input>
        <Button text={'Get Picture'} onClick={getFetch}></Button>
        
        {/* <div className='bg-red-500 w-full h-picHeight flex'>
          <img className='object-contain' src={picture} alt=''></img>
          <iframe src={video} frameBorder={'0'} title={'video'}></iframe>
          <div>
            <h2>{title}</h2>
            <p>{explanation}</p>
          </div>
        </div> */}

        
        <div className='bg-red-500 w-full h-picHeight'>
          <h2>{title}</h2>
          <img className='w-full h-full object-contain' src={picture} alt=''></img>
          {/* <iframe src={video} frameBorder={'0'} title={'video'}></iframe> */}
          <p className=''>{explanation}</p>
        </div>
        
        </div>
      </div>
    </div>
  );
}

export default App;
