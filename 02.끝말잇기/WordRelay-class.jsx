const React = require('react');
const {Component} = React;

class WordRelayClass extends Component{
    state={
        word:"최미영",
        value:"",
        result:""
    }

    onChangeInput = (e)=>{
        this.setState({value:e.target.value})
    }

    onSubmitForm = (e) =>{
        e.preventDefault();
        if(this.state.value[0] === this.state.word[this.state.word.length -1]){
           this.setState((prevState) => {
               return {
                   result: "딩동댕~",
                   word: prevState.value,
                   value: "",
               }
               this.refInput.focus();
           })
        }else{
            this.setState({
                    value:"",
                    result:"땡!"
            })
            this.refInput.focus();
        }
    }

    refInput;
    onRefInput = (e) =>{this.refInput = e};

    render(){
        return(
            <>
                <div>{this.state.word}</div>

                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} type="text" value={this.state.value} onChange={this.onChangeInput}/>
                    <button type="submit">입력!</button>
                </form>

                <div>
                    {this.state.result}
                </div>
            </>
        )
    }
}

module.exports = WordRelayClass;