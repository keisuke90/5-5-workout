import mysql from "mysql2";
import { PoolConnection } from "mysql2/typings/mysql";
import { promisify } from "util";

export const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USERNAME || "admin",
  password: process.env.MYSQL_PASSWORD || "admin",
  database: process.env.DATABASE || "workout_generator",
  connectionLimit: process.env.MYSQL_CONNECTION_LIMIT
    ? parseInt(process.env.MYSQL_CONNECTION_LIMIT)
    : 10,
  queueLimit: process.env.MYSQL_QUEUE_LIMIT
    ? parseInt(process.env.MYSQL_QUEUE_LIMIT)
    : 0,
});

export default {
  getConnection: promisify(pool.getConnection).bind(pool),
  executeQuery: promisify(pool.query).bind(pool),
  releaseConnection: function (connection: PoolConnection) {
    connection.release();
  },
  end: promisify(pool.end).bind(pool),
};
