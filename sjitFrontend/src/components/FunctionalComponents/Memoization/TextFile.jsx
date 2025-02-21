import { memo, useState } from "react";

const TextFile = () =>{
    var [text,setText] = useState("");
    return(
        <div>
            <h2>This is a text box</h2>
            <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
            <h3>The number is {text}</h3>
        </div>
    )
}
export default memo(TextFile);