import React, { useEffect, useState } from 'react';
import { useHttp } from './../../hooks/http.hook';
import User from './User/User';

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);
  const [allChecked, setAllChecked] = useState(false);

  const { request } = useHttp();

  useEffect( () => {
    const fetchData = async () => {
    try {
      let data = await request('/api/auth/getusers', 'GET');
      setUsers(data);  
      setShowUsers(!showUsers);
    } catch (e) { }
  }
  fetchData();
  }, [])


  return (
    <main className='container'>
      <br />
      <div className="btn-toolbar" role="toolbar">
        <div className="btn-group me-2" role="group">
          <button type="button" className="btn btn-danger">Block</button>
        </div>
        <div className="btn-group me-2" role="group">
          <button type="button" className="btn btn-success">Unblock</button>
        </div>
        <div className="btn-group me-2" role="group">
          <button type="button" className="btn btn-dark">Delete</button>
        </div>
      </div>
      <br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col"><input type='checkbox' onChange={() => setAllChecked(!allChecked)}/></th>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Registration date</th>
            <th scope="col">Last login date</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {showUsers && users.map((user) => (
            <User
            key={user.uniqId}
            allChecked={allChecked} 
            uniqId={user.uniqId} 
            name={user.name} 
            email={user.email} 
            registrationDate={user.registrationDate} 
            lastLoginDate={user.lastLoginDate}
            userStatus={user.userStatus}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default UsersPage;
