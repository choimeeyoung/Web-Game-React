const React = require('react');
const ReactDom = require('react-dom');

// const WordRelayClass = require('./WordRelay-class');
const WordRelayHooks = require('./WordRelay-hooks');

// ReactDom.render(<WordRelayClass/>,document.querySelector('#root'));
ReactDom.render(<WordRelayHooks />,document.querySelector('#root'));