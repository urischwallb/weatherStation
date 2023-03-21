import React, { useEffect, useState } from 'react'
import Box from './Box'
import './Application.css'
import Auto from './Auto'

export default function Home(props) {
  const [serverFlag, setServerFlag] = useState(false)
  const [key, setKey] = useState('jVqnIdjGDoRNAldk0PzUM7SUuL6wWnfB')
  const [searchAuto, setSearchAuto] = useState('')
  const [searchAutocompData, setSearchAutocompData] = useState('')//data
  const [cityKey, setCityKey] = useState('')
  const [forecasts5, setForecasts5] = useState('')
  /*   [
      {
        "Date": "2023-03-21T07:00:00+00:00",
        "EpochDate": 1679382000,
        "Temperature": {
          "Minimum": {
            "Value": 10.4,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 15.2,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 14,
          "IconPhrase": "Partly sunny w/ showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Night": {
          "Icon": 12,
          "IconPhrase": "Showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=1&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=1&unit=c&lang=en-us"
      },
      {
        "Date": "2023-03-22T07:00:00+00:00",
        "EpochDate": 1679468400,
        "Temperature": {
          "Minimum": {
            "Value": 9,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 14.6,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 12,
          "IconPhrase": "Showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Night": {
          "Icon": 40,
          "IconPhrase": "Mostly cloudy w/ showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=2&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=2&unit=c&lang=en-us"
      },
      {
        "Date": "2023-03-23T07:00:00+00:00",
        "EpochDate": 1679554800,
        "Temperature": {
          "Minimum": {
            "Value": 7.9,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 14,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 18,
          "IconPhrase": "Rain",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Night": {
          "Icon": 35,
          "IconPhrase": "Partly cloudy",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=3&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=3&unit=c&lang=en-us"
      },
      {
        "Date": "2023-03-24T07:00:00+00:00",
        "EpochDate": 1679641200,
        "Temperature": {
          "Minimum": {
            "Value": 7.6,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 13,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 12,
          "IconPhrase": "Showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Night": {
          "Icon": 36,
          "IconPhrase": "Intermittent clouds",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=4&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=4&unit=c&lang=en-us"
      },
      {
        "Date": "2023-03-25T07:00:00+00:00",
        "EpochDate": 1679727600,
        "Temperature": {
          "Minimum": {
            "Value": 5.6,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 13.6,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 13,
          "IconPhrase": "Mostly cloudy w/ showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Night": {
          "Icon": 35,
          "IconPhrase": "Partly cloudy",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=5&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/gb/london/ec4a-2/daily-weather-forecast/328328?day=5&unit=c&lang=en-us"
      }
    ] */

  const [valueSearch, setValueSearch] = useState('')





  useEffect(() => {
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${key}&q=${searchAuto}`)
      .then((res) => { return res.json() })
      .then((data) => {
        console.log(data)
        setSearchAutocompData(data)
      })
  }, [searchAuto])

  useEffect(() => {
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${props.search}`)
      .then((res) => { return res.json() })
      .then((data) => {
        // console.log(data[0])
        if (data.length === 0) {
          alert('city not found')
        } else {
          setCityKey(data[0].Key)
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
      })
  }, [cityKey])

  const favoritesUpload = () => {
    let data = { city: props.search, cityKey: cityKey, temp: `${forecasts5[0].Temperature.Maximum.Value}` };
    // console.log(data)
    let cheacker = false;
    props.favorites.forEach((val, ind) => {
      if (val.cityKey == cityKey) {
        cheacker = true;
      }
    })

    if (cheacker == true) {
      alert('its already exsist in favorites')
    } else {
      props.setFavorites([...props.favorites, data])
    }
  }

  const autocomp = () => (
    searchAutocompData == '' ? null :
      searchAutocompData.map((val, ind) => {
        return <Auto setSearch={props.setSearch} setSearchAuto ={setSearchAuto} val={searchAutocompData[ind]} />
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
        {searchAutocompData == null ? [] : autocomp()}
        <button onClick={() => { if (valueSearch != '') { setServerFlag(!serverFlag); props.setSearch(valueSearch) } else { alert('empty data') } }}>search</button>
      </div>
      <div>
        <h2>{props.search}</h2>   {/* city name */}
        <p>{forecasts5 == '' ? null : forecasts5[0].Temperature.Maximum.Value + '°C'}</p> {/* city Temperature */}
        <h3>{forecasts5 == '' ? null : forecasts5[0].Day.IconPhrase}</h3> {/* city Temperature desc */}
      </div>
      <div className='boxFlx' style={{ display: 'flex', justifyContent: 'space-evenly' }}> {/* 5 day box */}
        {forecasts5 == '' ? null : forecastdisplay()}
      </div>
    </div>

  )
}
