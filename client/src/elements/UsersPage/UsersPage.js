import React from 'react';

function UsersPage() {



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
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-dark">Delete</button>
        </div>
      </div>
      <br />
      <table class="table table-bordered">
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
          {/* ARRAY OF USERS */}
          <tr>
            <td><input type='checkbox' /></td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default UsersPage;
