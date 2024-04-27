import { createContext, useContext, useState } from "react";

const isRegContext = createContext();

export default function IsRegProvider({ children }) {
  const [isRegister, setIsRegister] = useState(
    JSON.parse(localStorage.getItem("isRegister")) || false
  );
  return <isRegContext.Provider value={{isRegister, setIsRegister}}>{children}</isRegContext.Provider>;
}

export function useIsReg(){
    return(
        useContext(isRegContext)
    )
}