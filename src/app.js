// import React from 'react';
// import ReactDOM from 'react-dom';
//import './style.css'
// FYI - Write dev code here...

const { useState } = React;
function Card() {
    const [cards, setCard] = useState([])
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')

    const handleQuestion = event => setQuestion(event.target.value)
    
    const handleAnswer = event => setAnswer(event.target.value)

    function handleSubmit(event) {
        event.preventDefault()
        const card = {
            id:Date.now(),
            quest: {
                value: question
            },
            ans: {
                value: answer
            }
        }
        setCard([card, ...cards])
        setAnswer('')
        setQuestion('')
    }

    return (
        <form onSubmit={() => handleSubmit(event)}>
            <div className="field">
                <div className="control">
                     <textarea className="textarea is-danger"
                      placeholder="Enter the Question"
                      value={question}
                       onChange={() => handleQuestion(event)}
                      ></textarea>
                </div>
                 <div className="control">
                    <textarea className="textarea is-focused"
                     placeholder="Enter the Answer"
                     value={answer} onChange={() => handleAnswer(event) }
                     ></textarea>
                 </div>
            </div>
            <button className="button is-success is-rounded">Save</button>
        </form>
    )
}
ReactDOM.render(<Card />, document.getElementById('root'));
