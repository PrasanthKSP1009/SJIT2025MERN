import { useState, useEffect, useRef } from "react";

const UseRef = () => {
  var [text, setText] = useState("");
  var previousRender = useRef();
  useEffect(() => {
    previousRender.current = text;
    console.log(previousRender.current);
  }, [text]);
  return (
    <div>
      <h1>This is useRef example.</h1>
      Type your Text:{" "}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h2>The current render text is {text}</h2>
      <h3>The previous render text is {previousRender.current}</h3>
    </div>
  );
};
export default UseRef;
