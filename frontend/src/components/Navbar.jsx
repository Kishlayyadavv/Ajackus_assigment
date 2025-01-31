import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">User Management</Link>
        <Link to="/add" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
          {/* <Button>Add User</Button> */}
          <br/>
          Add user
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;