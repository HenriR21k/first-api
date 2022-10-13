//Import
import mysql from 'mysql2/promise';


//Database connections

const dbConfig = {
  database: process.env.DB_NAME || 'UniBase',
  port: process.env.DB_PORT || 3306,
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PSWD || '',
  namedPlaceholders: true
}

let connection = null;

try {
  connection = await mysql.createConnection(dbConfig);
}
catch(error) {
  console.log(`Error creating database connection: ${error.message}`);
  process.exit();
}
export default connection;