import React , {Component} from 'react';

function getNumbers(){      // 숫자 4개를 겹치지않고 랜덤 하게 뽑는 함수

}

class NumberBaseball extends Component{
    state = {
        result:'',
        value:'',
        answer:getNumbers(),
        tries: [],
    }

    onSubmitForm = (e) =>{
        e.preventDefault();
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
                {/*<ul>*/}
                {/*    {['01','02','03'].map((v)=>{*/}
                {/*        return (*/}
                {/*            <li key={v}>{v}</li>*/}
                {/*        )*/}
                {/*    })}*/}

                {/*    <hr/>*/}
                {/*    {[*/}
                {/*        ['01','일번'],*/}
                {/*        ['02','이번'],*/}
                {/*        ['03','삼번']*/}
                {/*    ].map((v)=>*/}
                {/*        <li key={v[0]}><b>{v[0]}</b> - {v[1]}</li>*/}
                {/*    )}*/}

                {/*    <hr/>*/}
                {/*    {[*/}
                {/*        {text:'01',number:'일번'},*/}
                {/*        {text:'02',number:'이번'},*/}
                {/*        {text:'03',number:'삼번'}*/}
                {/*    ].map((v)=>*/}
                {/*            <li key={v.text}><b>{v.text}</b> - {v.number}</li>*/}
                {/*    )}*/}

                {/*    <hr/>*/}

                {/*    {[*/}
                {/*        {text:'01',number:'일번'},*/}
                {/*        {text:'02',number:'이번'},*/}
                {/*        {text:'03',number:'삼번'}*/}
                {/*    ].map((v,i)=>*/}
                {/*        <li key={v.text}><b>{v.text}</b> - {v.number} - {i}</li>*/}
                {/*    )}*/}

                {/*    /!* => 함수에서는 return 이 생략 가능 *!/ */}
                {/*</ul>*/}

            </>
        )
    }
}

export default NumberBaseball;