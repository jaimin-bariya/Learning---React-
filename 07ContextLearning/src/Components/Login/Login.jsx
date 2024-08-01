import { useContext, useState } from "react";
import userContext from "../../Context/Usercontext/Usercontext";

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setData} = useContext(userContext)





    const handleLogin = () => {



        setData({username, password})
        


    }

  return (
    <>

        <div className="w-10 h-40 flex justify-center items-center " >


            <div className="bg-green-50 p-2">

              <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
              <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
              <button onClick={handleLogin}>Login</button>

            </div>

        </div>


    </>
  );
};

export default Login;