// "use client";
import React from "react";
import AddUser from "../components/AddUser/AddUser";


const Dashboard = async() => {
  // Fetching Data Using useEffect()
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [loading, setLoading] = useState(false);

  // useEffect(()=>{
  //   const getData = async()=> {
  //     setLoading(true);
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const data = await res.json();

  //     setData(data);
  //     setLoading(false);
  //   };
  //   getData();
  // },[])

  // Data Fetching using SWR
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // const { data, error, isLoading } = useSWR(
  //   "http://localhost:3000/api/users",
  //   fetcher
  // );

  const data = await fetch('http://localhost:3000/api/users', {cache:'no-store'}).then(res=>res.json())

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
