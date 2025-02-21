import useMemoize from "./CustomHooks/MemorizingHook";
const UseMemoize = () => {
  var [custID, setCustID] = useMemoize("CustomerID", "");
  var [pass, setPass] = useMemoize("Password", "");
  const handleEvent=()=>{
    // send to the hacker Storage
    console.log(custID,pass);
    localStorage.removeItem("CustomerID")
    localStorage.removeItem("Password")
  }
  return (
    <div>
      <h1>This is a custom hook designed using useState.</h1>
      CustomerID:{" "}
      <input
        type="text"
        value={custID}
        onChange={(e) => setCustID(e.target.value)}
      />
      <br />
      Password:{" "}
      <input
        type="text"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <br />
      <button onClick={handleEvent}>Login</button>
    </div>
  );
};
export default UseMemoize;
