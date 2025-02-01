import mysql from "mysql2/promise";
import { DATABASE_URL } from "./config.js";

export const pool = mysql.createPool(DATABASE_URL);
