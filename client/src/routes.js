import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import LoginPage from './elements/LoginPage/LoginPage';
import Users from "./elements/Users/Users";

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route exact path="/users"  element={<Users />} />
        <Route path="/" element={<Navigate replace to="/users" />} />
      </Routes>
    )
  }

  return (
    <Routes>
        <Route exact path="/"  element={<LoginPage />} />
        <Route path="/" element={<Navigate replace to="/" />} />
    </Routes>
  )
}