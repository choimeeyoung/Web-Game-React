import React, {PureComponent} from 'react';

class RenderAverageClass extends PureComponent{
    render(){
        const {result} = this.props;
        return (
            result.length === 0 ? null
                :  <div>평균시간 : {result.reduce((a,c) => a+c) / result.length} ms </div>
            /* reduce : 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환  */
        )
    }
}

export default RenderAverageClass;