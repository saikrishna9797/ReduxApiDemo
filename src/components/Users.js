import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { fetchUsers } from '../slices/userSlice'

function Users() {

let dispatch = useDispatch();

let {users,ispending,isError,ErrorMsg} = useSelector(state =>state.users);

useEffect(()=>{
    let actionObj = fetchUsers("https://jsonplaceholder.typicode.com/users");
    dispatch(actionObj);
    
},[])


  return (
    <div className='container'>
      {isError && <h1 className='text-danger '>unable to get the data</h1>}
      {ispending && <h1 className='text-danger '>the data is loading</h1>}
    <table className='table '>
      <tbody className='text-center '>
        <tr>
          <td>id</td>
          <td>name</td>
          <td>email</td>
        </tr>
        {users.map(userObj =><tr key={userObj.id}>
          <td>{userObj.id}</td>
          <td>{userObj.name}</td>
          <td>{userObj.email}</td>
          </tr>)}
      </tbody>
    </table>

    </div>
  )
}

export default Users