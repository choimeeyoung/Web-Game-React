import React , {Component} from 'react';

const TryHooks = (({tryInfo}) => {
    return (
        <li>
            <div>입력값 : {tryInfo.try}</div>
            <div>결과 : {tryInfo.result}</div>
        </li>
    )
})

export default TryHooks;