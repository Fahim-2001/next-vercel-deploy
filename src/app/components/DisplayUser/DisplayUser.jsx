import React from "react";

const DisplayUser = async () => {
    const data = await fetch(process.env.NEXT_PUBLIC_BASE_URL+"api/users", {
        cache: "no-store",
      }).then((res) => res.json());
    // console.log(data)
  return (
    <div>
      {data.map((user) => (
        <p key={user.emp_id}>{user.emp_fname}</p>
      ))}
    </div>
  );
};

export default DisplayUser;
