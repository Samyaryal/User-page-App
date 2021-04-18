import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ id }) => {
  return (
    <Link to={`/users/${id}`} >
      <button className="btn btn-primary"> More Details </button>
    </Link>
  )
}

export default Button;