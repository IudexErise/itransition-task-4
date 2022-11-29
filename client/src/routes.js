import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import LoginPage from './elements/LoginPage/LoginPage';
import UsersPage from "./elements/UsersPage/UsersPage";

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route exact path="/users"  element={<UsersPage />} />
        <Route path="/" element={<Navigate replace to="/users" />} />
      </Routes>
    )
  }

  return (
    <Routes>
        <Route exact path="/users"  element={<Navigate replace to="/" />} />
        <Route exact path="/"  element={<LoginPage />} />
    </Routes>
  )
}