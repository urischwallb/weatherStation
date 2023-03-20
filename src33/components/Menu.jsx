import React from 'react'
import { Link } from 'react-router-dom'
export default function Menu() {
  return (
    <div >
        <Link to='/alltasks' ><button>all tasks</button> <br/></Link><br/>
        <Link to='/mytask' ><button>my task</button><br/></Link><br/>
        <Link to='/newtask' ><button>new task</button><br/></Link><br/>
        <Link to='/history' ><button>history</button><br/></Link><br/>
        <Link to='/' ><button>exit</button><br/></Link><br/>
    </div>
  )
}
