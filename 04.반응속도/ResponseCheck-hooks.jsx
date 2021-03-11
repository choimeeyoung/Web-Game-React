import React, {useRef, useState} from 'react';
import RenderAverageHooks from "./RenderAverage-hooks";


const ResponseCheckClass = () => {
    const [state ,setState] = useState('wait');                     // useState =>값의 set 시 Return 부분이 새로 실행
    const [message , setMessage] = useState('클릭해서 시작하세요.');
    const [result, setResult] = useState([]);

    const startTime = useRef();         // useRef => DOM 의 객체에 접근시 사용 , useRef 의 값 변경시 Return 부분이 새로 실행 X
    const endTime = useRef();           //           값이 바뀌기는 하지만 화면에 영향을 미치지 않은 경우 사용
    const timeOut = useRef(null);


    const onClickScreen = () => {
        if(state === 'wait'){
            setState('ready');
            setMessage('초록색이 되면 클릭하세요.');

            timeOut.current = setTimeout(() => {
                setState('now');
                setMessage('지금 클릭!!');
            },Math.floor(Math.random() *1000)+2000); // 2초~3초 랜덤

            startTime.current = new Date();

        }else if(state === 'ready'){
            clearTimeout(timeOut.current);                       // wait 에 있던 setTimeout 함수를 지워줌
            setState('wait');
            setMessage('너무 성급하게 클릭하셨습니다.');
        }else if(state === 'now'){

           endTime.current = new Date();

            setState('wait');
            setMessage('클릭해서 시작하세요.');
            setResult((prevResult) => {
               return [...prevResult, endTime.current - startTime.current]
            });
        }
    }

    const onReset = () => {
        setState('wait');
        setMessage('클릭해서 시작하세요.');
        setResult([]);
    }


    return (
        <>
            <div id="screen" className={state} onClick = {onClickScreen}>
                {message}
            </div>
            <RenderAverageHooks result = {result} />
            <button onClick = {onReset}>Reset!!</button>
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



export default ResponseCheckClass;