import React, { useEffect, useState } from 'react';
import './UserTable.css';

const UserTable = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.users)) {
          setUserData(data.users);
        } else {
          console.error('Data is not an array:', data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>User Table</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="user-table">
          <thead>
            <tr>
              <th>Sno</th>
              <th>Profile Pic</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>E-Mail</th>
              <th>Username</th>
              <th>Domain</th>
              <th>IP</th>
              <th>University</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <img src={user.image} alt="Profile Pic" width="50" height="50" />
                </td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.domain}</td>
                <td>{user.ip}</td>
                <td>{user.university}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserTable;
