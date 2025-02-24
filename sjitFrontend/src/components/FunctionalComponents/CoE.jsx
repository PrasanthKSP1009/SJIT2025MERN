import { createContext } from "react";
import Faculty from "./ContextAPI/Faculty";
export const ResPub = createContext();
const CoE = () =>{
  return(
    <ResPub.Provider value={{sgpa:"10 SGPA", cgpa:"10 CGPA"}}>
      <h1>Result Published.</h1>
      <Faculty />
    </ResPub.Provider>
  )
}
export default CoE;