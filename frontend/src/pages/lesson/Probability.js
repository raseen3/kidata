import ReactMarkdown from 'react-markdown';
import React from 'react'
import lesson4_2 from "../../Lessons_Zhuoqun/4_probability.md";
import {useState, useEffect} from "react";
import gfm from 'remark-gfm'

export default function Calculation() {
    const [lesson, setLesson] = useState('');
    useEffect(() => {
        fetch(lesson4_2)
            .then(res => res.text())
            .then(text => setLesson(text))
    }, [lesson]);

    return(
        <div className="basic-graph">
            <div className="lesson-card">
                <ReactMarkdown remarkPlugins={[gfm]} children={lesson}/>
            </div>
        </div>
    )
}