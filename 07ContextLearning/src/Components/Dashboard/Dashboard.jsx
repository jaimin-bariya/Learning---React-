import { useContext } from "react";
import userContext from "../../Context/Usercontext/Usercontext";


const Dashboard = () => {

    const {data} = useContext(userContext)

    console.log(data);

    if (!data) return (
      <p>You are not login </p>
    )
    else return (
      <>
        <h1>This is Dashboard</h1>
        <p>UserName: {data.username}</p>
        <p>Password: {data.password}</p>
      </>
    )

};

export default Dashboard;