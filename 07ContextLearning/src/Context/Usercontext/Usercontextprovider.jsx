import { useState } from "react";
import userContext from "./Usercontext";

const Usercontextprovider = ({children}) => {
    const [data, setData] = useState(0)

  return (
    
    <userContext.Provider value={{data, setData}} >

    {children}

    </userContext.Provider>

  );
};

export default Usercontextprovider;