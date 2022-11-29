import React, { useEffect, useState } from 'react';
import { useHttp } from './../../hooks/http.hook';

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);

  const { loading, error, request } = useHttp();

  const mapUsers = async () => {
    try {
      let data = await request('/api/auth/getusers', 'GET');
      setUsers(data);  
      setShowUsers(!showUsers);
    } catch (e) { }
  }


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
        <div className="btn-group me-2" role="group">
          <button type="button" className="btn btn-info" onClick={mapUsers}>Get users</button>
        </div>
      </div>
      <br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col"><input type='checkbox' /></th>
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
            <tr key={user.uniqId}>
              <td><input type='checkbox' /></td>
              <td>{user.uniqId}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.registrationDate}</td>
              <td>{user.lastLoginDate}</td>
              <td>{user.userStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default UsersPage;
