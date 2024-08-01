


export const Button = ({color, setColor}) => {


    let textColor = 'black'

    if (color == "black") {
        textColor = 'white'
    }

    return (


        
    
        <button className="outline-none px-4 rounded-xl py-1" style={{backgroundColor: color, color:textColor}}  onClick={() => setColor(color)} > {color} </button>
    )   

}