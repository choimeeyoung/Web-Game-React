import React, { PureComponent } from 'react';

class TryClass extends PureComponent {
    render() {
        const { tryInfo } = this.props;
        console.log("렌더링")
        return (
            <li>
                <div>{tryInfo.try}</div>
                <div>{tryInfo.result}</div>
            </li>
        );
    }
}

export default TryClass;