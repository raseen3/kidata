import ReactMarkdown from 'react-markdown';
import React from 'react'
import lesson1_2 from "../../Lessons_Zhuoqun/1_length.md";
import {useState, useEffect} from "react";
import gfm from 'remark-gfm'

export default function Calculation() {
    const [lesson, setLesson] = useState('');
    useEffect(() => {
        fetch(lesson1_2)
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