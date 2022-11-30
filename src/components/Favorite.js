import React from 'react'

const Favorite = ({favorite, onDelete}) => {
  return (
    <div>{favorite.picture}</div>
  )
}

export default Favorite