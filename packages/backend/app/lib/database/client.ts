import { QueryOptions } from "mysql2";
import pool from "./pool";

export const MySQLClient = {
  executeQuery: async function (query: QueryOptions) {
    let results = await pool.executeQuery(query);
    return results;
  },
};
