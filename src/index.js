import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
 I  - 0-1 Death
 II - 2-3 Standing
 III- 4-5-6-7 Death
 IV - 3 Birth

 switch (sum)
    case 2:
    cellState = previousState
    case 3:
    cellState = 1;
    default:
    cellState=0; 
*/

class Presentational extends React.Component {
    render() {
        return ( <p className="test"> Halo? </p>);
    };
};

ReactDOM.render(<Presentational/>, document.getElementById('root'))