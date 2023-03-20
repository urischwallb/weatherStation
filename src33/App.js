import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu';
import Signin from './components/Signin';
import AllTask from './components/AllTask';
import NewTask from './components/NewTask';
import History from './components/History';
import MyTask from './components/MyTask';

function App() {

  const [menu, setMenu] = useState(false)
  const [taskList, setTaskList] = useState([])
  const [serverFlag, setServerFlag] = useState(false)


  useEffect(() => {
    fetch('/getData').then((res) => { return res.json() }).then((data) => {
      setTaskList(data)
    })
  }, [serverFlag])

  const addNewTask = (name, desc, worker) => {
    let tmp = {
      name, desc, worker
    }
    fetch('addTask', {
      headers: {
        'Contect-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({
        task: tmp
      })
    })
      .then((res) => { return res.json() }).then((data) => {
        console.log(data)
        setServerFlag(!serverFlag);
      })
    // setTaskList([...taskList,tmp]);
  }


  const showMenu = () => {
    if (menu == true) {
      return <Menu />
    } else {
      return null;
    }
  }



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
    <div className='App'>

      {fetchfunc('https://reqres.in/api/users', 'GET')}
      {fetchfunc('https://reqres.in/api/users', 'POST', { name: 'post data' })}
      {fetchfunc('https://reqres.in/api/users/2', 'PUT', { name: 'put data' })}
      {fetchfunc('https://reqres.in/api/users/2', 'DELETE')}


      <BrowserRouter>
        {showMenu()}

        <Routes>
          <Route path='/' element={<Signin next={setMenu} />} />
          <Route path='/alltasks' element={<AllTask tasksArr={taskList} />} />
          <Route path='/newtask' element={<NewTask add={addNewTask} />} />
          <Route path='/mytask' element={<MyTask />} />
          <Route path='/history' element={<History />} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}


export default App;
