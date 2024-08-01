import { memo } from "react";

const Navbar = ({modeNumber, setMode}) => {


    console.log("Renderd");
  return (
    <>
      
        <button onClick={setMode}>Mode is : {modeNumber}</button>

    </>
  );
};

export default memo(Navbar);