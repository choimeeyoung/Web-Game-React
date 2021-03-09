import React , {Component} from 'react';
import TryClass from './Try-class';

function getNumbers01(){      // 숫자 4개를 겹치지않고 랜덤 하게 뽑는 함수 (1~9까지의 함수 중)
    // let arr = [];
    // for(let i = 0; i<4; i++){
    //     let n = Math.floor(Math.random() * (9)) +1;
    //     if(arr.find((e) => (e === n))){
    //         i--;
    //     }else{
    //         arr.push(n);
    //     }
    // }

    const candidate01 = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for(let i=0; i<4; i += 1){
        const chosen = candidate01.splice(Math.floor(Math.random()*(9-i)),1)[0]; // 삭제된 값을 배열로 반환
        array.push(chosen);
    }
    return array;
}

class NumberBaseballClass extends Component{
    state = {
        result:'',
        value:'',
        answer:getNumbers01(),
        tries: [],                          // React 에서는 배열에 Push 사용 X
    }

    onSubmitForm = (e) =>{
        e.preventDefault();
        // let ball = 0;
        // let strike = 0;

        // if(this.state.tries.length == 10){
        //     this.setState({                               // 상태값의 초기화
        //         result : '10회 모두 도전 하셨습니다. 다시 시도하세요~ ',
        //         value:'',
        //         answer: getNumbers(),
        //         tries : []
        //     })
        // }else{
        //     if(this.state.value === this.state.answer.join('')){    // 정답일 경우 ,  join: 배열의 항목을 모두 합쳐서 문자열로 만드는 역활
        //                                                             //                   배열과 배열 사이에 추가적인 문자열을 삽입할 수 있는 함수
        //         this.setState({                               // 상태값의 초기화
        //             result : '홈런 !!',
        //             value:'',
        //             answer: getNumbers(),
        //             tries : [...this.state.tries,{try:this.state.value,result:"홈런"}]
        //         })
        //     }else {
        //         for(let i=0; i < this.state.answer.length; i++){
        //             if(this.state.value.substr(i,1) === this.state.answer.join('').substr(i,1)){
        //                 strike++
        //             }else if(this.state.answer.join('').includes(this.state.value.substr(i,1))){
        //                 ball++
        //             }
        //         }
        //         this.setState({
        //             result : '스트라이크 : ' +strike + ' 볼: '+ball,
        //             tries : [...this.state.tries,{try:this.state.value,result:'스트라이크 : ' +strike + ' 볼: '+ball}]
        //         })
        //     }
        // }

        const {value,tries,answer} = this.state;

        if(this.state.value === this.state.answer.join('')){                            // 정답우 일 경
            this.setState((prevState) => {
                return{
                    result:'홈런!!! 게임을 다시 시작 합니다.',
                    tries:[...prevState.tries,{try:value, result:'홈런!!!'}],
                }
            })

            this.setState({
                value:'',
                answer:getNumbers01(),
                tries : []
            })
        }else{                                                                          // 오답 일 경우
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if(tries.length >= 9){                                           // 10번이상 틀렸을 경우
                this.setState({
                    result: `10번 넘게 틀려서 실패!! 답은 ${answer.join(',')} 였습니다.`
                })
                this.setState({
                    value:'',
                    answer:getNumbers01(),
                    tries : []
                })
            }else{
                for(let i=0; i<4; i++){
                    if(answerArray[i] === answer[i]){
                        strike += 1;
                    }else if(answer.includes(answerArray[i])){
                        ball +=1;
                    }
                }

                this.setState({
                    tries: [...tries, {try:value,result:`${strike} 스트라이크 / ${ball} 볼`}],
                    value:'',
                })
            }
        }
    }

    onChangeInput = (e) => {
        this.setState({value: e.target.value})
    }

    render(){
        return(
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input type="number" maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                    <button type="submit">입력!!!</button>
                </form>
                <div>시도 : {this.state.tries.length}</div>
                <ul>
                    {this.state.tries.map((v,i) => {
                        return (
                            <TryClass key={i} tryInfo={v}/>
                        )
                    })}
                </ul>
            </>
        )
    }
}

export default NumberBaseballClass;