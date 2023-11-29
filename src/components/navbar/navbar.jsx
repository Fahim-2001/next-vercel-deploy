"use client"
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'


const Navbar = () => {
  
  return (
    <div className={styles.container}>
      <div>
        <Link href={"/"} className={styles.logo}>FahimDevs</Link>
      </div>
      <div className={styles.links}>
      <DarkModeToggle/>
      <Link href={"/"} className={styles.link}>Home</Link>
      <Link href={"/portfolio"}className={styles.link}>Portfolio</Link>
      <Link href={"/blog"}className={styles.link}>Blog</Link>
      <Link href={"/about"}className={styles.link}>About</Link>
      <Link href={"/contact"}className={styles.link}>Contact</Link>
      <Link href={"/dashboard"}className={styles.link}>Dashboard</Link>
      <button className={styles.logout} onClick={()=>{console.log("Logged out!")}}>Logout</button>
    </div>

    </div>
  )
}

export default Navbar