import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import Login from './elements/Login/Login';
import Users from "./elements/Users/Users";

export const useRoutes = isAuthenticated => {
	if (isAuthenticated) {
		return (
			<Routes>
				<Route exact path="/users"  element={<Users />} />
				<Route path="/" element={<Navigate replace to="/" />} />
			</Routes>
		)
	}

	return (
		<Routes>
				<Route exact path="/"  element={<Login />} />
				<Route path="/" element={<Navigate replace to="/" />} />
		</Routes>
	)
}