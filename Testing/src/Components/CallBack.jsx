import { memo, useContext} from "react";
import { modeContext } from "../Contexts";
import React from "react";

const CallBack = () => {

    const { mode, changeMode} = useContext(modeContext)
    console.log("Mode is changed");

  return (
    <>

        

        <button onClick={changeMode}>Mode : {mode}</button>


    </>
  );
};

export default memo(CallBack)