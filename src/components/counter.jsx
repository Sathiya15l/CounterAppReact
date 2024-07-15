import React, { Component, useState } from 'react';
/*class Counter extends Component {
    
    render() { 
        return (<h1>Hello World</h1>);
    }
}*/

function Counter(){
    
    const[count, setCount]=useState('0');
    
    return(
        <React.Fragment>
            <span> {count} </span>
            <button onClick = {()=>setCount(count+1)} >Increment</button>
        </React.Fragment>
    );
}
 
export default Counter;