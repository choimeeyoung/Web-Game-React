import React,{useState}  from 'react';
import Try from './Try-hooks';


function getNumbers02() {
    const candidate02 = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for(let i=0; i<4; i += 1){
        const chosen = candidate02.splice(Math.floor(Math.random()*(9-i)),1)[0]; // 삭제된 값을 배열로 반환
        array.push(chosen);
    }
    return array;
}


const NumberBaseballHooks = () =>{
    const [result,setResult] = useState('');
    const [value,setValue] = useState('');
    const [answer,setAnswer] = useState(getNumbers02());
    const [tries,setTries] = useState([]);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(value === answer.join('')){                            // 정답우 일 경우
            setResult('홈런!!! 게임을 다시 시작 합니다.');
            setTries((prevTries) => {
                return [
                    ...prevTries,{try:value, result:'홈런!!!'}
                ]
            })

            setValue('');
            setAnswer(getNumbers02());
            setTries([]);
        }else{                                                                          // 오답 일 경우
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if(tries.length >= 9){                                           // 10번이상 틀렸을 경우
                setResult(`10번 넘게 틀려서 실패!! 답은 ${answer.join(',')} 였습니다.`);
                setValue('');
                setAnswer(getNumbers02());
                setTries([]);
            }else{
                for(let i=0; i<4; i++){
                    if(answerArray[i] === answer[i]){
                        strike += 1;
                    }else if(answer.includes(answerArray[i])){
                        ball +=1;
                    }
                }
                setTries((prevTires) => {
                    return [
                        ...prevTires,{try:value,result:`${strike} 스트라이크 / ${ball} 볼`}
                    ]
                })
                setValue('');
            }
        }
    }
    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input type="number" maxLength={4} value={value} onChange={onChangeInput} />
                <button type="submit">입력!!!</button>
            </form>
            <div>시도 : {tries.length}</div>
            <ul>
                {tries.map((v,i) => {
                    return (
                        <Try key={i} tryInfo={v}/>
                    )
                })}
            </ul>
        </>
    )
}

export default NumberBaseballHooks;
