import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {Input} from "@/components/ui/input"





export default function SearchForm(props) {
    const [userId, setUserId] = useState('')
    const [language, setLanguage] = useState('')
    const [keyword, setKeyword] = useState('')
    return (
    <>
        <Input placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
        <Input placeholder="Language" value={language} onChange={(e) => setLanguage(e.target.value)} />
        <Input placeholder="Keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)} />

        <Button onClick={() => props.onFetch(userId, language, keyword)}>
        Fetch Issues
        </Button>
        <Button onClick={() => props.onGet(userId)}>
        Saved Issues
        </Button>
    </>
    )
}

