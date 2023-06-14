import React from 'react'
import { useSelector } from 'react-redux'

function Userscount() {

  let {users} = useSelector(state =>state.users);


  return (
    <div>userscount
      {<p>{users.length}</p>}
    </div>
  )
}

export default Userscount