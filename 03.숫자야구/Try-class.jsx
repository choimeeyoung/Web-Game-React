import React , {Component} from 'react';

class TryClass extends Component{
    render(){
        const {tryInfo} = this.props;
        return (
            <li>
                <div>입력값 : {tryInfo.try}</div>
                <div>결과 : {tryInfo.result}</div>
            </li>
        )
    }
}

export default TryClass;