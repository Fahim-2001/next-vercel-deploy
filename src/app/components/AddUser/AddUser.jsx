'use client'
import React from 'react'
import style from './AddUser.module.css'
import { useRouter } from 'next/navigation'

const AddUser = () => {
    const router = useRouter()

    const handleSubmitUser = async(e) =>{
        e.preventDefault();

        const data ={
            firstName: e.target.firstname.value,
            lastName: e.target.lastname.value,
            department: e.target.department.value,
            age: e.target.age.value,
            salary: e.target.salary.value,
            joiningDate: e.target.joining_date.value,
        }

        const req = await fetch('https://next-practise-delta.vercel.app/api/users', {
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })
        router.refresh()

        if(req.ok){
            alert("User Added");
        }else{
            alert("User registration failed")
        }
    }
    
  return (
    <div>
        <p>Add User</p>
        <form action="" onSubmit={handleSubmitUser}>
            <div>
                <input required className={style.input} type="text" name='firstname' placeholder='Enter Your First Name Here' />
            </div>

            <div>
                <input required className={style.input} type="text" name='lastname' placeholder='Enter Your Last Name Here' />
            </div>

            <div>
                <input required className={style.input} type="text" name='department' placeholder='Enter Your Department Name Here' />
            </div>

            <div>
                <input required className={style.input} type="number" name='age' placeholder='Enter Your Age Here' />
            </div>

            <div>
                <input required className={style.input} type="number" name='salary' placeholder='Enter Your Salary Here' />
            </div>

            <div>
                <input required className={style.input} type="date" name='joining_date' placeholder='Enter Your Joining Date Here' />
            </div>
            <button type='submit'>Add User</button>
        </form>
    </div>
  )
}

export default AddUser