import React , {Component} from 'react';
import RenderAverageClass from "./RenderAverage-class";

class ResponseCheckClass extends Component{
    state = {
        state:'wait',
        message:'클릭해서 시작하세요.',
        result: [],
    };

    timeOut;
    startTime;
    endTime;

    onClickScreen = () => {
        const {state,message,result} = this.state;
        if(state === 'wait'){
            this.setState({
                state: 'ready',
                message:'초록색이 되면 클릭하세요.'
            });

            this.timeOut = setTimeout(() => {
                this.setState({
                    state: 'now',
                    message:'지금 클릭!!'
                });
            },Math.floor(Math.random() *1000)+2000); // 2초~3초 랜덤
            this.startTime = new Date();
        }else if(state === 'ready'){
            clearTimeout(this.timeOut);                       // wait 에 있던 setTimeout 함수를 지워줌
            this.setState({
                state: 'wait',
                message:'너무 성급하게 클릭하셨습니다.'
            })
        }else if(state === 'now'){
            this.endTime = new Date();
            this.setState((prevState) =>{
                return {
                    state: 'wait',
                    message:'클릭해서 시작하세요.',
                    result: [...prevState.result,this.endTime-this.startTime],
                }
            })
        }
    }

    onClickBtn = () => {
        this.setState({
            state:'wait',
            message:'클릭해서 시작하세요.',
            result: [],
        })
    }

    render(){
        const {state,message,result} = this.state;
        return (
            <>
                <div id="screen" className={state} onClick = {this.onClickScreen}>
                    {message}
                </div>
                <RenderAverageClass result = {result} />
                <button onClick = {this.onClickBtn}>Reset!!</button>
                <div>
                    {result.map((v,i) => {
                        return (
                            <p key={`${v}`}>{i+1}번째 : {v} </p>
                        )
                    })}
                </div>
            </>
        )
    }
}

export default ResponseCheckClass;