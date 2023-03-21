import React from 'react'
import Box from './Box'

export default function Favorites(props) {

  const favoritesDisplay = () => (
    props.favorites.map((val, ind) => (
      <Box arr={props.favorites} set={props.setFavorites} index = {ind} data={{ city: val.city, temp: val.temp }} />
      ))
    )
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '10px' }}> {/* favorites box */}
      {props.favorites == [] ? null : favoritesDisplay()}
    </div>
  )
}
