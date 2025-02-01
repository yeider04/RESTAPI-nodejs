import { config } from "dotenv";

config();

// usa el valor de la variable de entorno PORT si existe, sino entonces usa 3000.
export const PORT = process.env.PORT || 3000;
export const DATABASE_URL = process.env.DATABASE_URL;
