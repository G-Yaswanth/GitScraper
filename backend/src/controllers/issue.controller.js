//Using this file for handling the requests & Sending responses logic

import Issue from '../models/issue.model.js';
import fetchGitIssues from '../services/github.service.js';

export const validateUser = (req,res,next)=>{
    try{
        if((req.query.userId==undefined || req.query.userId.trim()=="")
            && (req.body?.userId==undefined || req.body?.userId.trim()=="")){
            return res.status(401).json({message:"UserId is required"});
        }
        next();
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

export const getIssues = async(req,res)=>{
    try{
        const {userId} = req.query;
        const issues = await Issue.find({userId});
        console.log("Issues fetched from DB: ",issues.length);
        res.status(200).json(issues);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

export const fetchIssues = async(req,res)=>{
    try{
        const {userId,language,keywords} = req.body;
        //Fetching issues from Github API
        const gitIssues = await fetchGitIssues(language, keywords);
        const issuesToSave = gitIssues.map(issue=>new Issue({
            userId: userId,
            title: issue.title,
            labels: issue.labels.map(label=>label.name),
            createdAt: issue.created_at,
            updatedAt: issue.updated_at,
            state: issue.state,
            url: issue.html_url,
            language: [language, ...keywords],
            interested: false
        }));
        
        const savedIssues = await Issue.insertMany(issuesToSave);

        console.log("Issues saved to DB for user: ", userId);
        //storing is pending
        res.status(200).json(savedIssues);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

export const deleteIssues = async(req,res)=>{
    try{
        const deletedIssues = await Issue.deleteMany({
            userId: req.query.userId,
            interested: false
        });
        res.status(200).json({message:`Successfully Deleted ${deletedIssues.deletedCount} issues for ${req.query.userId}`});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

export const pingServer = (req,res)=>{
    res.status(200).json({message:"Server is up and running"});
}