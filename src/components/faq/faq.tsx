import { Questions } from "../../types/types";
import Question from "../question/question";

type FAQProps = {
  questions: Questions;
}

function Faq({questions} : FAQProps) : JSX.Element {
  return (
    <section className="faq">
      <div className="small-container">
        <h2>Вопрос/Ответ</h2>
        {questions.map((ask) => <Question question={ask.question} answer={ask.answer}/>)}
      </div>
    </section>
  )
}

export default Faq;
