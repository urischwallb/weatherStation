import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu';
import Favorites from './components/Favorites';
import Home from './components/Home';
import img from './components/nature.png';


function App() {


  const [search, setSearch] = useState('tel aviv')
  const [favorites, setFavorites] = useState([/* {city: 'tel aviv', temp: '25'},{city: 'london', temp: '15'} */])
  const week = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  const fetchfunc = (url, type, data) => {
    
    if (type == 'GET') {
      fetch(url, {
        method: type,
        headers: {
          "Content-type": "application/json",
        },
      }).then((res) => {
        if (res.ok) {
          console.log('the request passed')
        } else {
          console.log('the request not passed')
        }
        return res
      })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => console.log(e))
    }
    else if (type == 'POST' || type == 'PUT') {
      fetch(url, {
        method: type,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ data }),
      })
      .then((res) => {
        if (res.ok) {
          console.log('the request passed')
        } else {
          console.log('the request not passed')
        }
        return res
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((e) => console.log(e))
    }
    else if (type == 'DELETE') {
      fetch(url, {
        method: type,
        headers: {
          "Content-type": "application/json",
        },
      }).then((res) => {
        if (res.ok) {
          console.log('the request passed')
        } else {
          console.log('the request not passed')
        }
      })
      .catch((e) => console.log(e) )
    }
  }


  return (
    <div className='App' style={
      {backgroundImage: `url(${img})` ,backgroundRepeat: "repeat", backgroundSize: "cover"}
      }>
      <BrowserRouter>
      <Menu />
        <Routes>
          <Route path='./' element={<Home fetchfunc={fetchfunc} setSearch={setSearch} search={search} week={week} favorites={favorites} setFavorites={setFavorites} />} />
          <Route path='./favorites' element={<Favorites fetchfunc={fetchfunc} favorites={favorites} setFavorites={setFavorites} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
