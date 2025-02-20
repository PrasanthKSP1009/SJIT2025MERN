import { useEffect, useState } from "react";

const UseEffect = () => {
  var [text, setText] = useState("");
  useEffect(() => {
    console.log(text);
  },[text]);
  return (
    <section>
      <h1>This is useEffect Example</h1>
      Type your Text:
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <h2>The text typed is {text}</h2>
    </section>
  );
};
export default UseEffect;
