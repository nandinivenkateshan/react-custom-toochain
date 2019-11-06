"use strict";

var _jsxFileName = "/home/admi/work/react-custom-toochain/src/app.js";
// import React from 'react';
// import ReactDOM from 'react-dom';
//import './style.css'
// FYI - Write dev code here...
const {
  useState
} = React;

function Card() {
  const [cards, setCard] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleQuestion = event => setQuestion(event.target.value);

  const handleAnswer = event => setAnswer(event.target.value);

  function handleSubmit(event) {
    event.preventDefault();
    const card = {
      id: Date.now(),
      quest: {
        value: question
      },
      ans: {
        value: answer
      }
    };
    setCard([card, ...cards]);
    setAnswer('');
    setQuestion('');
  }

  return React.createElement("form", {
    onSubmit: () => handleSubmit(event),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, React.createElement("div", {
    className: "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, React.createElement("div", {
    className: "control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, React.createElement("textarea", {
    className: "textarea is-danger",
    placeholder: "Enter the Question",
    value: question,
    onChange: () => handleQuestion(event),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), React.createElement("div", {
    className: "control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, React.createElement("textarea", {
    className: "textarea is-focused",
    placeholder: "Enter the Answer",
    value: answer,
    onChange: () => handleAnswer(event),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }))), React.createElement("button", {
    className: "button is-success is-rounded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Save"));
}

ReactDOM.render(React.createElement(Card, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}), document.getElementById('root'));