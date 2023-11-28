const { default: pool } = require("@/app/utils/db");
const { NextResponse, NextRequest } = require("next/server");

export const GET = async (req, res) => {
  const connection = await pool.getConnection();
  const [posts] = await connection.query("SELECT * FROM posts");
  connection.release();
  const data = JSON.stringify(posts);
  return new NextResponse(data, { status: 200 });
};

export async function POST(req){
  
  try {
    const data = await req.json();
    console.log(data);
    const connection = await pool.getConnection();
    await connection.query("INSERT INTO posts (id, title) VALUES (?,?)",[id,data.title]);
    id++;
    connection.release();
  } catch (error) {
    console.log(error.message)
    return NextResponse.json(error.message, {status:500});
  }
};
