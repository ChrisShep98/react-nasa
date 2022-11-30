import React, { useEffect, useRef, useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Button from './components/Button'
import Favorites from './components/Favorites'
import AddFavorite from './components/AddFavorite'
// import Favorite from './components/Favorite'

function App() {

  const inputRef = useRef(null)
    const [picture, setPicture] = useState('')
    const [video, setVideo] = useState('')
    const [title, setTitle] = useState('')
    const [explanation, setExplanation] = useState('')

    const [favItem, setFavItem] = useState([])

    function getFetch(){

        fetch(`https://api.nasa.gov/planetary/apod?api_key=zU71SV2z8UAS2tpSRxtx9Ii4giGUAk6QIufK4bCn&date=${inputRef.current.value}`)
          .then(res => res.json())
          .then(data => {
            // console.log(data)
            // console.log(inputRef.current.value)
            if(data.media_type === 'image'){
              setPicture(data.hdurl)
            }else if(data.media_type === 'video'){
              setVideo(data.url)
            }
              setTitle(data.title)
              setExplanation(data.explanation)
          })
      }

      // function addToFav(){
      //       setFavItem([
      //         ...favItem,
      //         {date: `${inputRef.current.value}`, picture: picture,}
      //       ])
      // }

      useEffect(() => {
        const getFavorites = async () => {
          const favoritesFromServer = await fetchFavorites()
          setFavItem(favoritesFromServer)
        }
        getFavorites()
      }, [])


      const fetchFavorites = async () => {
        const res = await fetch('http://localhost:2000/favorites')
        const data = await res.json()

        return data
      }

        
      const fetchFavorite = async (id) => {
        const res = await fetch(`http://localhost:5000/favorites/${id}`)
        const data = await res.json()
  
        return data
      }

      const addFavorite = async (favorite) => {
        const res = await fetch('http://localhost:2000/favorites', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(favorite)
        })

        const data = await res.json()

        setFavItem([...favItem, data])
      }



  return (
    <Router>
    <div className='container mx-auto flex justify-center items-center'>
      <div className='text-center mt-20 border'>
        <h1>Astronomy Picture of the Day</h1>
        <div>
        <input className='bg-white hover:bg-gray-100 text-gray-800 font-semibold border border-gray-400 rounded shadow h-8' type='date' ref={inputRef}></input>
        <AddFavorite onAdd={addFavorite} />
        <Button text={'Get Picture'} onClick={getFetch}></Button>
        <Routes>
        <Route path='/' element={
          <>
          <Button text={'Favorites'} onClick={addFavorite} />
          {favItem.length > 0 ? <Favorites favorites={favItem} /> : 'No favorites to Show'}
          </>
        }
        />
        </Routes>
        <div className='bg-slate-400 w-full h-picHeight flex'>
          <img className='' src={picture} alt=''></img>
          {/* <iframe src={video} frameBorder={'0'} title={'video'}></iframe> */}
          <div className='self-center'>
            <h2 className='underline pb-3'>{title}</h2>
            <p>{explanation}</p>
            {/* <Button text={'Add to Favorites'} /> */}
          </div>
          
        </div>

        
        {/* <div className='bg-red-500 w-full h-picHeight'>
          <h2>{title}</h2>
          <img className='w-full h-full object-contain' src={picture} alt=''></img>
          <iframe src={video} frameBorder={'0'} title={'video'}></iframe>
          <p className=''>{explanation}</p>
        </div> */}
        
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
