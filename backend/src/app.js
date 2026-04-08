//used for setting up the express server

import express from 'express';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());

import issueRoutes from './routes/issue.routes.js';

app.use('/api',issueRoutes);

export default app;

