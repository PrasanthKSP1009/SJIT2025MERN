import { useState } from "react";
var UseState = () =>{
    var initialValue = 0
    var [num,setNum] = useState(initialValue)
    return (
        <div>
            <h1>This is useState Example</h1>
            <button onClick={() => setNum(num -1)}>-</button>
            <h4>The number is {num}</h4>
            <button onClick={() => setNum(num + 1)}>+</button>
            <button onDoubleClick={()=> setNum(initialValue)}>Reset</button>
        </div>
    )
}
export default UseState;