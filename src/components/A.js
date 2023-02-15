//1. import area
import B from "./B"



//2. definetion area

let A=props=>{
   
    console.log(props);
    return (
        <>
            <h2> {props.text} {props.children} {props.surname}</h2>
            <B datab ={ props.text}></B>
            
           
        </>
    )
   

  }
  




//3. export area

// There are 2 ways you can export in NodeJs
//3.1 export default
export default A;
//3.2 named export