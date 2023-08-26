import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import { notFound } from 'next/navigation';

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
 
  if (!res.ok) {
    return notFound();
  }
 
  return res.json()
}

const BlogPost = async({params}) => {

  // Data from getData() with id;
  const data = await getData(params.id);
  // console.log("->",data);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            {data.desc}
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>
              {/* {data.username} */}
              Fahim
              </span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/2002566/pexels-photo-2002566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         {/* {data.content} */}
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum amet magni ab repudiandae maxime odit culpa ex, itaque reiciendis pariatur, aperiam incidunt. Excepturi ipsa tenetur animi soluta alias debitis odit sapiente iusto mollitia? Earum, impedit dolores? Hic totam corrupti nulla odit magnam incidunt similique veniam fuga, soluta ipsa velit voluptatum excepturi odio nobis cumque alias labore accusamus ipsam animi ab deserunt culpa numquam temporibus tempora? Consequuntur voluptas modi inventore, nihil libero corrupti recusandae eveniet reiciendis quam maiores nisi sunt molestias sit. Sapiente voluptatum saepe ut possimus neque facilis cum pariatur alias minus, quis minima ab voluptatem architecto animi quod maiores ipsam autem nam corrupti consequatur, quam molestias reiciendis explicabo? Architecto, eligendi obcaecati. Necessitatibus reprehenderit placeat rem nemo officiis unde beatae aliquam quo dolorum repellat dolorem cupiditate libero, omnis sunt esse dolor nesciunt incidunt. Eum temporibus quas cum, animi ex deserunt sed quae quam labore in eius quod sequi nisi iste?
        </p>
      </div>
    </div>
  )
}

export default BlogPost