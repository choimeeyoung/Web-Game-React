import React from 'react';
import ReactDom from 'react-dom';
const {hot}  = require('react-hot-loader/root');

// import NumberBaseballClass from "./NumberBaseball-class";
import NumberBaseballHooks from "./NumberBaseball-hooks";

// const Hot = hot(NumberBaseballClass);
const Hot = hot(NumberBaseballHooks);

ReactDom.render(<NumberBaseballHooks/>,document.querySelector("#root"))