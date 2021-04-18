import React from 'react';
import FetchApi from './usefetch';
import Button from './Button';

const UserList = () => {

	const { data: userData, error, loading } = FetchApi('users')
	if (loading) return "Loading..."
	if (error) throw error

	if ((userData.length) > 0) {
		return (
			<div className="userlist-page">
				{userData.map((user) => (
					<div className="user-items">
						<div className="user-firstletter"><h1>{user.name[0]}</h1></div>
						<div>
							<div className="user-name">{user.name}</div>
							<div className="username">@{user.username}</div>
							<a className="user-website" href="/#">http://{user.website}</a>
						</div>
						<Button id={user.id} />
					</div>

				))}
			</div>
		);
	}


};

export default UserList;
