import React from 'react'


const Users = ({users, loading}) => {

  return (
    <div>
        {loading&&<h1>Loading...</h1>}
        {users.map((user, index)=>(
            <div key={index}>
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