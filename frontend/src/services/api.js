import axios from 'axios';

const vite_base_url = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
    baseURL: vite_base_url
})


export async function getIssues(userId){
    try{
        const response = await instance.get('/issues',{
            params:{
                userId: userId
            }
        })
        return response.data;
    }
    catch(error){
        console.log("Error Getting Issues: ", error);
    }
}

export async function fetchIssues(userId, language, keywords){
    try{
        const response = await instance.post('/issues/fetch',{
            userId: userId,
            language: language,
            keywords:keywords
        })
        return response.data;
    }
    catch(error){
        console.log("Error Fetching Issues: ", error);
    }
}

export async function deleteIssues(userId){
    try{
        const response = await instance.delete('/issues',{
            params:{
                userId: userId
            }
        })
        return response.data;
    }
    catch(error){
        console.error("Error deleting issues: ", error);
    }
}
