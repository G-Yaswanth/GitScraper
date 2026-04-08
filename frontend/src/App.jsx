import {getIssues,deleteIssues, fetchIssues} from './services/api.js';
import SearchForm from './components/SearchForm.jsx';
import IssueTable from './components/IssueTable.jsx';
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import {Table} from "@/components/ui/table"

function App() {

  const [issues,setIssues] =useState([]);
  const handleFetch = async(userId, language, keywords) =>{
    const data = await fetchIssues(userId, language, keywords);
    console.log("Data: ",data);
    setIssues(data);
  }

  const handleGet = async(userId) =>{
    const data = await getIssues(userId);
    console.log("Data: ",data);
    setIssues(data);
  }

  const handleDelete = async(userId)=>{
    await deleteIssues(userId);
    setIssues([]);
  }
  return (
    <>
    <div className="max-w-7xl mx-auto p-6">
      <SearchForm onFetch={handleFetch} onGet={handleGet} onDelete={handleDelete} />
      <IssueTable issues={issues} />
    </div>
    </>
  )
}

export default App
