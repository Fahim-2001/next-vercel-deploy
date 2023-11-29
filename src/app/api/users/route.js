import { NextResponse } from "next/server";

const { default: pool } = require("../../../utils/db");

const connection = await pool.getConnection()

export async function GET() {
  
  const [user] = await connection.query("SELECT * FROM employee");
  connection.release();
  return NextResponse.json(user, { status: 201 });
}

export async function POST(req) {
  try {
    const user = await req.json();
    console.log(user)
    await connection.query(
      "INSERT INTO employee(emp_fname,emp_lname,emp_dept,emp_age,emp_salary,hiredate) VALUES(?,?,?,?,?,?)",
      [
        user.firstName,
        user.lastName,
        user.department,
        user.age,
        user.salary,
        user.joiningDate,
      ]
    );
    return NextResponse.json(
      { message: "User added Successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error.message)
    return NextResponse.json(
        error.message,
        { status: 500 }
      );
  }
}
