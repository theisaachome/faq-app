import React, { useState } from 'react'
import Question from './components/Question';
import data from './data'

const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions and Answer about login</h3>
        <section className="info">
          {questions.map((question) => {
            return <Question key={question.id} {...question} ></Question>
          })}
        </section>
      </div>
    </main>
  );
}

export default App
