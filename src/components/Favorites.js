import React from 'react'
import Favorite from './Favorite'

const Favorites = ({favorites, onDelete}) => {
  return (
    <div>
        {favorites.map((favorite) => (
            <Favorite key={favorite.id} favorite={favorite}
            onDelete={onDelete} />
        ))}
    </div>
  )
}

export default Favorites