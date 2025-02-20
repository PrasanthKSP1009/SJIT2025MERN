import { useState, useMemo } from "react";
function slowFunction(num){
    for(var i = 0;i<10000000000;i++){}
    return num*2
}
const UseMemo = () => {
  var [number, setNumber] = useState(0);
  var [theme, setTheme] = useState(false);
  var styling = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };
  var doublingUpANumber = useMemo(()=>{
    return slowFunction(number)
  },[number])
  return (
    <div style={styling}>
      <button onClick={() => setTheme(!theme)}>Toggle Theme</button>
      <h1>This is useMemo example </h1>
      Number Box:{" "}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h2>The number is {number}</h2>
      <h2>The number is {doublingUpANumber}</h2>
    </div>
  );
};
export default UseMemo;
