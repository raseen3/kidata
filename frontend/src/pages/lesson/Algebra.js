import ReactMarkdown from 'react-markdown';
import React from 'react'
import lesson5_1 from "../../Lessons_Zhuoqun/5_algebra.md";
import {useState, useEffect} from "react";
import gfm from 'remark-gfm'

export default function Calculation() {
    const [lesson, setLesson] = useState('');
    useEffect(() => {
        fetch(lesson5_1)
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