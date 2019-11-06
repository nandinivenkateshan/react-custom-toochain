"use strict";

var _jsxFileName = "/home/admi/react-custom-toochain/src/app.js";
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
  const textarea = {
    maxWidth: '250px'
  };
  const container = {
    marginTop: '60px',
    display: 'grid',
    gridGap: '30px',
    justifyContent: 'center'
  };

  const handleQuestion = event => setQuestion(event.target.value);

  const handleAnswer = event => setAnswer(event.target.value);

  function handleSubmit(event) {
    event.preventDefault();
    const card = {
      id: Date.now(),
      ques: question,
      ans: answer
    };
    setCard([card, ...cards]);
    setAnswer('');
    setQuestion('');
  }

  return React.createElement("form", {
    onSubmit: () => handleSubmit(event),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, React.createElement("div", {
    className: "field",
    style: container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, React.createElement("div", {
    className: "control",
    style: textarea,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, React.createElement("textarea", {
    className: "textarea is-danger has-fixed-size",
    placeholder: "Enter the Question",
    value: question,
    onChange: () => handleQuestion(event),
    style: textarea,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), React.createElement("div", {
    className: "control",
    style: textarea,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, React.createElement("textarea", {
    className: "textarea is-focused has-fixed-size",
    placeholder: "Enter the Answer",
    value: answer,
    onChange: () => handleAnswer(event),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }))), React.createElement("div", {
    className: "has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, React.createElement("button", {
    className: "button is-success is-rounded is-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Save")));
}

ReactDOM.render(React.createElement(Card, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}), document.getElementById('root'));