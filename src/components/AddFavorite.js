import React from 'react'

import { useState, useRef } from 'react'

const AddFavorite = ({onAdd}) => {
    const [title, setTitle] = useState('')
    const [picture, setPicture] = useState('')
    const inputRef = useRef()
    

    const onSubmit = () => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=zU71SV2z8UAS2tpSRxtx9Ii4giGUAk6QIufK4bCn&date=${inputRef.current.value}`)
          .then(res => res.json())
          .then(data => {
            setTitle(data.title)
            setPicture(data.hdurl)
          })
        onAdd({title, picture})

        setTitle('')
        setPicture('')
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div>
            
            <input type='date' placeholder='Add Fav' ref={inputRef}
            onClick={() =>
            setTitle(e.target.value)} />
        </div>
        {/* <div className='form-control'>
            <label>Day & Time</label>
            <input type='text' placeholder='Day & Time'
            value={day} onChange={(e) =>
                setPicture(e.target.value)}/>
        </div> */}
        <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddFavorite