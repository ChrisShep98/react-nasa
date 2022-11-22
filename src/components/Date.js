import React, { useRef } from 'react'
import Button from './Button'

const Date = () => {

    const inputRef = useRef(null)

    function getFetch(){

        fetch(`https://api.nasa.gov/planetary/apod?api_key=zU71SV2z8UAS2tpSRxtx9Ii4giGUAk6QIufK4bCn&date=${inputRef.current.value}`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
          })
      }

  return (
    <div>
        <input className='bg-white hover:bg-gray-100 text-gray-800 font-semibold border border-gray-400 rounded shadow h-8' type='date' ref={inputRef}></input>
        <Button onClick={getFetch}></Button>
    </div>
  )
}

export default Date