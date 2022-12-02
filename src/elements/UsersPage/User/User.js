import React, { useState } from "react";

function User({uniqId, name, email, registrationDate, lastLoginDate, userStatus, allChecked}) {
  
  const [isChecked, setIsChecked] = useState(allChecked)

  return (
    <tr key={uniqId}>
      <td><input type='checkbox' checked={isChecked} onChange={() => setIsChecked(!isChecked)} /></td>
      <td>{uniqId}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{registrationDate}</td>
      <td>{lastLoginDate}</td>
      <td>{userStatus}</td>
    </tr>
  )
}

export default User;