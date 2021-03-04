const React = require('react');
const {useState,useRef} = React;

const WordRelayHooks = () =>{
    const [word,setWord] = useState("최미영");
    const [value,setValue] = useState("");
    const [result,setResult] = useState("");
    const inputRef = useRef(null);

    const onSubmitForm = (e) =>{
        e.preventDefault();
        if(word[word.length-1] === value[0]){
            setWord(value);
            setValue("");
            setResult("딩동댕~")
            inputRef.current.focus();
        }else{
            setValue("");
            setResult("땡");
            inputRef.current.focus();
        }
    };

    const onChangeInput = (e) =>{
        setValue(e.target.value);
    }

    return (
        <>
            <div>{word}</div>

            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} type="text" value={value} onChange={onChangeInput}/>
                <button type="submit">입력!</button>
            </form>

            <div>
                {result}
            </div>
        </>
    )
}
module.exports = WordRelayHooks;