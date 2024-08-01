import { useParams } from "react-router-dom";

const User = () => {


    const { userID } = useParams()
    const defaultUserID = 0;

  return (
    <>
      
        <div className="flex justify-center items-center  bg-orange-700 ">

                <h1 className=" text-white">User Param is:  {userID || defaultUserID} </h1>

        </div>

    </>
  );
};

export default User;