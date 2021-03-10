import React , {PureComponent} from 'react';

class RenderTest extends PureComponent {
    state = {
        counter:0,
        string:'hello',
        number:'1',
        boolean:false,
        object:{},
        array : []
    };

    onClick = () =>{
        // React 가 변경을 감지 못함[rendering 발생 X] => 현재의 array 와 이후의 array 가 같다고 인식 되기때문에 감지를 못함
        // const array = this.state.array;
        // array.push(1);
        // this.setState({
        //     array: array,
        // })

        // 새로운 array 를 만들어 기존 array 를 복사해 넣어준 후 사용해야 React 에서 변경을 감지 함 (rendering 발생 O) => react 에서의 원칙
        this.setState({
            array:[...this.state.array,1],
        })
    };

    // 버튼클릭시 state 의 값이 변경 되지 안았음에도 불구하고 rendering 이 발생함
    // setState 를 호출시 값의 변경 여부와 상관없이 rendering 이 발생
    // 해결 방법
    //  1. 직접 어떤경우에 rendering 을 발생할지 지정해주어야 함
    //      shouldComponentUpdate(nextProps, nextState, nextContext) {
    //          if(this.state.counter !== nextState.counter){
    //              return true;
    //          }
    //          return false;
    //      }
    //  2. Component => PureComponent 로 변경 : React 에서 자동으로 설정
    //      단! 복잡한 구조에서는 적용에 한계가 있다.

    // 복잡한 자료 구조의 사용을 자제 해야 함

    render(){
        console.log('렌더링 :', this.state);
        return (
            <div>
                <button onClick={this.onClick}>클릭!!!</button>
            </div>
        )
    }
}

export default RenderTest;