import React from 'react';

import { useEffect } from 'react';
import { useState } from 'react';

import AuthService from '../../Pages/Home/AuthService';
import getDataService from '../../Pages/Home/getData'
const GetAllUsers = () => {
	const [userList, setUserList] = useState([]);
	const [user, setUser] = useState([]);
	
	useEffect(() => {
		const currentUser = AuthService.getCurrentUser();
		setUser(currentUser);

		if (currentUser['role'] === 'Admin') {
				getDataService.getAll()
				.then((res) => {
					console.log(res.data)
					setUserList(res.data);
				})
				.catch((err) => {
					console.error(err);
				});
		}
	}, []);

	return (
		<div>
			<h1>User List</h1>
			<table className="table table-striped">
				<thead>
					<tr>
						<th>User ID</th>
						<th>User name</th>
						<th>Password</th>
						<th>Role</th>
						<th>Result</th>
					</tr>
				</thead>
				<tbody>
					{user['role'] === 'Admin' ? (
						userList.map((user) => (
							<tr key={user.id}>
								<td>{user.id}</td>
								<td>{user.userName}</td>
								<td>{user.password}</td>
								<td>{user.role}</td>
								<td>{user.result}</td>
							</tr>
						))
					) : (
						<tr key={user.id}>
							<td>{user.id}</td>
							<td>{user.userName}</td>
							<td>{user.password}</td>
							<td>{user.role}</td>
							<td>{user.result}</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};
export default GetAllUsers;
