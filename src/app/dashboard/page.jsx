"use client"
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'

const Dashboard = () => {
  
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
  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);

  console.log(data);

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard