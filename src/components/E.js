//1. import area

//import (someNamedImport) from somelocation/somelibary
import { F } from "./F";

//2. definetion area
let E=props=>{
    //every function has a writen somthing
    return (
        <>
            <h1>App bhul bhi jao to;  {props.datae}</h1>
            <F dataf={props.datae}></F>
        </>
    )
}




//3. export area

export default E;
