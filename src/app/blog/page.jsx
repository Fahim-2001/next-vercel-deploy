import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import {notFound} from 'next/navigation'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
 
  if (!res.ok) {
    return notFound();
  }
 
  return res.json()
}


const Blog = async() => {

  // Data from getData()
  const data = await getData();
  
  return (
    <div className={styles.mainContainer}>
      {data.map(item => (
        <Link href="/blog/id" className={styles.container} key={item.id}>
        <div className={styles.imgContainer}>
          <Image src='https://images.pexels.com/photos/17938483/pexels-photo-17938483/free-photo-of-landscape-field-animal-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''width={400} height={250} className={styles.image}/>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <h1 className={styles.desc}>{item.body}</h1>
        </div>
      </Link>
      ))}
      
    </div>
  )
}

export default Blog