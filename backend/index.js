const express = require('express');
const app = express();
// app.express(json);

app.post('/api/fetch-issues',(req,res)=>{
    res.send("Fetch Issues from GitHub API");
    next();
});

app.get('/api/issues',(req,res)=>{
    res.send("Get Issues from MongoDB");
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})