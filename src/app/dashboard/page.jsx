// "use client";
import React from "react";
import AddUser from "../components/AddUser/AddUser";


const Dashboard = async() => {

  // const data = await fetch('http://localhost:3000/api/users', {cache:'no-store'}).then(res=>res.json())

  // console.log(data);

  return (
    <div>
      <p>
        Our Users
      </p>
      <div>
        <AddUser/>
      </div>
      {
        data.map(user=>(
          <p key={user.emp_id}>{user.emp_fname}</p>
        ))
      }
    </div>
  );
};

export default Dashboard;
