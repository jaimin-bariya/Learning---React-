import React, {useState} from "react";


export const Form = () => {

    const [name, setName] = useState("Dear")


    return (


        <>
            <p>Your Name: {name}</p>

            <form>
                <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} ></input>
            </form>

        </>

    )

}
