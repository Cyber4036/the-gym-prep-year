import React from 'react'


const Users = ({users, loading}) => {

  return (
    <div className='users'>
        {loading?<h1>Loading...</h1>:users.map((user, index)=>(
            <div key={index} className='user-card'>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.website}</p>
            </div>
        ))}
    </div>
  )
}

export default Users