//Here, I will have all the routes defined related to the GitHub Issues
//then call the relevant controller for each endpoint

import express from 'express';
import {getIssues, fetchIssues,deleteIssues, validateUser, pingServer} from '../controllers/issue.controller.js';

const router = express.Router();

router.get('/ping',pingServer);
router.use(validateUser);
router.get('/issues',getIssues);
router.post('/issues/fetch',fetchIssues);
router.delete('/issues',deleteIssues);

export default router;