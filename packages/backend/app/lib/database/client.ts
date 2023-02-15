import mysql from "mysql2";
import { promisify } from "util";

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USERNAME || "admin",
  password: process.env.MYSQL_PASSWORD || "admin",
  database: process.env.DATABASE || "workout_generator",
});
export const MySQLClient = {
  connect: promisify(connection.connect).bind(connection),
  query: promisify(connection.query).bind(connection),
  end: promisify(connection.end).bind(connection),
};
