import React from 'react';
import { Link, useParams } from 'react-router-dom';
import FetchApi from './usefetch';

const UserPage = () => {
	const { id } = useParams();
	const { data: eachData, loading, error } = FetchApi(`users/${id}`)
	if (loading) return "Loading..."
	if (error) return error
	return (
		<>
			<div className="home-link">
				<Link to="/"><button className="btn btn-primary">Back to Home</button></Link>
			</div>
			<div className="user-info">
				<p>name: {eachData.name}</p>
				<p>username: {eachData.username}</p>
				<p>email: {eachData.email}</p>
				<p>phone:{eachData.phone}</p>
				<p>company: {eachData.company.name}</p>
				<p>	website: https://{eachData.website}</p>
				<ul className="user-details">
					<li>street: {eachData.address.street}</li>
					<li>suite: {eachData.address.suite}</li>
					<li>city: {eachData.address.city}</li>
					<li>zipcode: {eachData.address.zipcode}</li>
				</ul>

			</div>

		</>
	);
};

export default UserPage;
