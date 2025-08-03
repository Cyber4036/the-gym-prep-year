import React from 'react'
import Users from './components/Users.jsx'
import { useState, useEffect } from 'react'

//API TO USE https://jsonplaceholder.typicode.com/users

const App = () => {

 

  //states
  const [users, setUsers] = useState([])
  const [loading, setLoading]= useState(false)

  //effects
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=> {fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
    .catch(error => console.error(`Oops, Something is wrong, check this: ${error}`))
    .finally(()=> setLoading(false))
  }, 5000
    )

  },[])


  return (
    <div>
      <h1>USER FETCHER</h1>

      <Users users={users} loading={loading}></Users>
    </div>
  )
}

export default App