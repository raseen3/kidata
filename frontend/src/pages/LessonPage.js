import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Markdown from "markdown-to-jsx";

const ASCII_A = 'A'.charCodeAt(0);

function QuizChoice(props) {
  return (
    <li>
      <button
        // this needs some revision; may want to elevate this to be at the same
        // level as the component  
        onClick={() => props.onClick()}
      >
        { props.text }
      </button>
    </li>
  )
}

function QuizQuestion(props) {
  const { question, choices, answer } = props.content;

  const [ wasClicked, setClicked ] = useState(false);

  return (
    <div>
      <h1>{ question }</h1>
      {
        // questions/choices should be returned as an array when stringify-ed,
        // so use map:
        choices.map((choice, i) => (
          // ...and return a div for each array entry:
          <QuizChoice 
            className={ wasClicked ? (answer === choice ? "success" : "danger") : "" }
            text={ `${String.fromCharCode(ASCII_A + i)}. ${choice}` }
            onClick={() => {
              setClicked(true);
            }}
          />
        ))
      }
    </div>
  )
}

function LessonContent(props) {
  const { quiz } = props;

  let choices;
  if (quiz) {
    choices = quiz.map(content => (
      <QuizQuestion content={content} />
    ));
  }

  return (
    <>
      <Markdown className="markdown" children={ props.markdown } />
      {/* if we don't have a quiz, just don't render anything here: */}
      { choices }
    </>
  )
}

// status screens:
function FetchLoading() {
  return (
    <div className="lesson">
      <h1>Working on getting you your lesson...</h1>
    </div>
  )
}

function FetchError() {
  // this is OK for now:
  return (
    <div className="error-page">
      <h1 className="title">Uh oh.</h1>

      {/* should we leave this as a line break or properly format it?: */}
      <br/>

      <h2>It seems like we couldn't find your lesson.</h2>
      <h3>How about trying a different one instead?</h3>
      
      <br/>
      
      <Link to="/lessons">
        <div className="to-home">
          <h3>Return to Lessons</h3>
        </div>
      </Link>
    </div>
  )
}

function LessonPage() {
  const { id } = useParams();

  const [ content, setContent ] = useState(null);
  const [ quiz, setQuiz ] = useState(null);

  const [ failure, setFailure ] = useState(false);
  
  useEffect(() => {
    fetch("http://localhost:8080/pull/slides/" + id)
      .then(response => response.json())
      // apply lesson content:
      .then(body => {
        // if we have no markdown, need to invoke an error:
        const markdown = body.markdown;
        if (!markdown)
          // invoke the .catch:
          throw new Error("Did not receieve markdown body from server.");
        
        body.quiz && setQuiz(JSON.parse(body.quiz));

        setContent(markdown);
      })
      .catch(reason => {
        setFailure(true);
        console.log(reason);
      });
  }, []);

  let renderElement = <FetchLoading />
  
  // is there a better way to do this?:
  if (failure) {
    renderElement = <FetchError />
  } else if (content) {
    renderElement = <LessonContent
      markdown={ content }
      // rely on quiz being falsy here:
      quiz={ quiz }
    />
  }
  
  return (
    <div className="lesson-page">
      { renderElement }
    </div>
  )
}

export default LessonPage;