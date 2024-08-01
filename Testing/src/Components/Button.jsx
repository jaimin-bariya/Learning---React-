import { memo, useContext } from "react";
import { CountContext } from "../Contexts";

const Button = () => {

  const {count, setCount} = useContext(CountContext)

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>Count is : {count} </button>
      
    </>
  );
};

export default memo(Button);