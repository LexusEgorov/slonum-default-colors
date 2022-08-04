import { useState } from 'react';
import './styles/question.css'

type QuestionProps = {
  question: string;
  answer: string;
};

function Question({question, answer} : QuestionProps) : JSX.Element {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="question">
      <div className="question__ask">
        <p>{question}</p>
        <div className="toggler"
          onClick={() => {setIsOpened(!isOpened)}}
        >
          {
            isOpened ? '–' : '+'
          }
        </div>
      </div>
      {
        isOpened ? 
        <div className="question__answer">
          <p>{answer}</p>
        </div>
        : <></>
      }
    </div>
  )
}

export default Question;
