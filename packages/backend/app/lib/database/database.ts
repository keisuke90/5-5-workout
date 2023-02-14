import mysql from "mysql2";

export const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_PORT || "admin",
  password: process.env.MYSQL_PASSWORD || "admin",
  database: process.env.DATABASE || "workout_generator",
});
