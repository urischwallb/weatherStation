import React, { useEffect, useState } from 'react'
import Box from './Box'

export default function Home(props) {
  const [serverFlag, setServerFlag] = useState(false)
  const [key, setKey] = useState('4AtsgHysNBEIrLBRuVaxaT1VOxpyLd2o')
  const [cityKey, setCityKey] = useState('')
  const [forecasts5, setForecasts5] = useState('')
  const [valueSearch, setValueSearch] = useState('')

  useEffect(() => {
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${props.search}`)
      .then((res) => { return res.json() })
      .then((data) => {
        // console.log(data[0])
        setCityKey(data[0].Key)
      })
  }, [serverFlag])
  useEffect(() => {
    fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${key}&metric=true`)
      .then((res) => { return res.json() })
      .then((data) => {
        console.log(data.DailyForecasts)
        setForecasts5(data.DailyForecasts)
      })
  }, [cityKey])

  const forecastdisplay = () => (
    forecasts5.map((val, ind) => {
      const d = new Date(forecasts5[ind].Date);
      let day = d.getDay();
     return <Box data={{ day: props.week[day], temp: forecasts5[ind].Temperature.Maximum.Value }} />
    })
  )
  const searchFunc = (value) => {
    if (value.charAt(value.length-1) == '' || value.charAt(value.length-1) == ' ') {
      
    }
    else if (value.charAt(value.length-1) <= 'z' && value.charAt(value.length-1) >= 'a' || value.charAt(value.length-1) <= 'Z' && value.charAt(value.length-1) >= 'A') {
      setValueSearch(value)
    }
    else{
      alert('plz - only english!')
    }
}

  return (
    <div>
      <div>
        <button onClick={() => {props.setFavorites([/* ...props.favorites +  */{city: `${props.search}` ,temp: `${forecasts5[0].Temperature.Maximum.Value }`}]) }}>Add to Favorites</button><br />
        <input onChange={(e) => { searchFunc(e.target.value) }} type="text" placeholder='Enter Place...' />
        <button onClick={() => { setServerFlag(!serverFlag);props.setSearch(valueSearch) }}>search</button>
      </div>
      <div>
        <h2>{props.search}</h2>   {/* city name */}
        <p>{forecasts5 == '' ? null : forecasts5[0].Temperature.Maximum.Value+'°C'}</p> {/* city Temperature */}
        <h3>{forecasts5 == '' ? null : forecasts5[0].Day.IconPhrase}</h3> {/* city Temperature desc */}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}> {/* 5 day box */}
        {forecasts5 == '' ? null : forecastdisplay()}
      </div>
    </div>

  )
}
