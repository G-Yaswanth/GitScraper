//using this for running the backend server

import dotenv from 'dotenv';
import connectToDB from './src/config/db.js';
import app from './src/app.js';
dotenv.config();

//calling config function to connect to mongoDB
await connectToDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
