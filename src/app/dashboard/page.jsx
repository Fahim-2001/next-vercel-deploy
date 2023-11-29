// "use client";
import React from "react";
import AddUser from "../../components/AddUser/AddUser";

const Dashboard = async () => {
  const data = await fetch(process.env.NEXT_PUBLIC_BASE_URL+"api/users", {
    cache: "no-store",
  }).then((res) => res.json());

  return (
    <div>
      <p>Our Users</p>
      <div>
        <AddUser />
      </div>
      {data.map((user) => (
        <p key={user.emp_id}>{user.emp_fname}</p>
      ))}
    </div>
  );
};

export default Dashboard;
