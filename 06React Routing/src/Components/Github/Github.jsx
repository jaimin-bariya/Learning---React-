import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {


    const data = useLoaderData()




  return (
    
    <>
      
    <div className="flex justify-center items-center  bg-orange-700 ">

            <h1 className=" text-white">Github Followers:  {data.followers || 0} </h1>

    </div>

</>

  );
};

export default Github;


export const githubFollowerInfo = async ()  => {

    const response = await fetch("https:api.github.com/users/jaimin-bariya")
    return response.json()

}