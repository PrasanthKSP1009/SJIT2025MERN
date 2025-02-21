import { useState, useCallback } from "react";

const UseCallback = () => {
  var [number, setNumber] = useState(0);
  var [theme, setTheme] = useState(false);
  var styling = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };
  var numList = useCallback((mul) => {
    return [number+mul*2, number+mul*4, number+mul*8]
  },[number])
  return (
    <div style={styling}>
      <button onClick={() => setTheme(!theme)}>Toggle Theme</button>
      <h1>This is useCallback example </h1>
      Number Box:{" "}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <h2>The Number List is </h2>
      {numList(10).map((val,index)=>(
        <h2 key={index}>{val}</h2>
      ))}
    </div>
    
  );
};
export default UseCallback;
