//will code how to talk to GitHub APIs

import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com/search/issues';

// https://api.github.com/search/issues?q=label:"good first issue"+language:javascript+is:open&sort=created&order=desc&per_page=20


async function fetchGitIssues(language, keywords) {
    const query = `label:"good first issue"+language:${language}+${keywords ? `+${keywords}` : ''}+is:open&sort=created&order=desc&per_page=20`;
    try{
        const response = await axios.get(`${GITHUB_API_BASE_URL}`+`?q=${query}`);
        return response.data.items;
    } catch (error) {
        console.error("Error fetching Git issues:", error);
        throw error;
    }
}


export default fetchGitIssues;