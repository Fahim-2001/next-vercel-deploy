import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        <p>Copyright @ 2023 | Yasir Omar Fahim</p>
      </div>
      <div className={styles.socials}>
        <Image src="/1.png" width={15} className={styles.icon} height={15} alt="FahimDevs"/>
        <Image src="/2.png" width={15} className={styles.icon} height={15} alt="Fah3mDevs"/>
        <Image src="/3.png" width={15} className={styles.icon} height={15} alt="FahimDevs"/>
        <Image src="/4.png" width={15} className={styles.icon} height={15} alt="FahimDevs"/>
      </div>
    </div>
  );
};

export default Footer;
