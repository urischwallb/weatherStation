import React, { useEffect, useState } from 'react'
import Box from './Box'
import './Application.css'
import Auto from './Auto'

export default function Home(props) {
  const [serverFlag, setServerFlag] = useState(false)
  const [key, setKey] = useState('7mSdKm8srsds70XUngSzN7J23Grouk9G')
  const [searchAuto, setSearchAuto] = useState('')
  const [searchAutocompData, setSearchAutocompData] = useState('')//data
  const [cityKey, setCityKey] = useState('')
  const [forecasts5, setForecasts5] = useState('')
  const [currentcondition, setCurrentcondition] = useState('')

  useEffect(() => {//autocompleate
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${key}&q=${searchAuto}`)
      .then((res) => { return res.json() })
      .then((data) => {if (data.length === 0) {
        alert('error not found autocomplete')
      } else {
        setSearchAutocompData(data)
            }
      })

  }, [searchAuto])

  useEffect(() => {
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${props.search}`)
      .then((res) => { return res.json() })
      .then((data) => {
        // console.log(data[0])
        if (data.length === 0) {
          alert('error city not found')
        } else {
          setCityKey(data[0].Key);
        }
      })

  }, [serverFlag])

  useEffect(() => {//error
    if (cityKey.trim() == '') {
      return
    }
    fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${key}&metric=true`)
      .then((res) => { return res.json() })
      .then((data) => {
        // console.log(data.DailyForecasts)
        setForecasts5(data.DailyForecasts)
        if (searchAutocompData != '') {
          setSearchAutocompData('')
        }
      })
    fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${key}`)
      .then((res) => { return res.json() })
      .then((data) => {
        setCurrentcondition(data)
      })
  }, [cityKey])

  const favoritesUpload = () => {
    let data = { city: props.search, cityKey: cityKey, temp: `${currentcondition[0].Temperature.Metric.Value}` };
    // console.log(data)
    let cheacker = false;
    props.favorites.forEach((val, ind) => {
      if (val.cityKey == cityKey) {
        cheacker = true;
      }
    })

    if (cheacker == true) {
      alert('its already exist in favorites')
    } else {
      props.setFavorites([...props.favorites, data])
    }
  }

  const autocomp = () => (
    searchAutocompData == '' ? null :
      searchAutocompData.map((val, ind) => {
        return <Auto setServerFlag={setServerFlag} serverFlag={serverFlag} setSearch={props.setSearch} dataSet={setSearchAutocompData} setSearchAuto={setSearchAuto} val={searchAutocompData[ind]} />
      })
  )

  const forecastdisplay = () => (
    forecasts5.map((val, ind) => {
      const d = new Date(forecasts5[ind].Date);
      let day = d.getDay();
      return <Box data={{ day: props.week[day], temp: forecasts5[ind].Temperature.Maximum.Value }} />
    })
  )

  const searchFunc = (value) => {
    if (value.charAt(value.length - 1) == '' || value.charAt(value.length - 1) == ' ') {
      setSearchAuto(value)
    }
    else if (value.charAt(value.length - 1) <= 'z' && value.charAt(value.length - 1) >= 'a' || value.charAt(value.length - 1) <= 'Z' && value.charAt(value.length - 1) >= 'A') {
      setSearchAuto(value)
    }
    else {
      alert('plz - only english!')
    }
  }


  return (
    <div>
      <div>
        <button onClick={() => { favoritesUpload() }}>Add to Favorites</button><br />
        <input onChange={(e) => { searchFunc(e.target.value) }} type="text" placeholder={props.search == '' ? 'Enter Place...' : props.search} />
        <div className='flx'>
          {searchAutocompData == null ? [] : autocomp()}
        </div>
      </div>
      <div>
        <h2>{props.search}</h2>   {/* city name */}
        <p>{currentcondition == '' ? null : currentcondition[0].Temperature.Metric.Value + '°C'}</p> {/* city Temperature */}
        <h3>{currentcondition == '' ? null : currentcondition[0].WeatherText}</h3> {/* city Temperature desc */}
      </div>
      <div className='boxFlx' style={{ display: 'flex', justifyContent: 'space-evenly' }}> {/* 5-day box */}
        {forecasts5 == '' ? null : forecastdisplay()}
      </div>
    </div>

  )
}
