import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './style.css';
const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div class="background">
    <div className="container">
      <div className="py-14">
      <br></br>
       <br></br>
       <br></br>
       <br></br>
        <h1 class="Header">Home Page</h1>
        <br></br>
       <br></br>
        <table class="table bordershadow">
          <thead class="table-color">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">School</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.school}</td>
                <td>{user.email}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 className="info-container">Owner: St_d05</h2>
    </div>
    </div>
  );
};

export default Home;
