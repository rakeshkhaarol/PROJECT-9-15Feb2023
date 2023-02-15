//1. import area 
  import D from "./D";    



//2. definetion area

function C(props){
    //every function has a written somthing
    return (
        <>
            <h1>  Kuch is trah;  {props.datac} </h1>
            
            <D datad={props.datac}></D>
        </>
    )
}



//3. export area

export default C;