import { useState } from "react";

function Todoinput({addarray}) {

    let [intext,inputset]= useState("");
let inputchange=(x)=>{
    inputset(x)
}
    return (<div><input type="text" onChange={(e)=>{inputchange(e.target.value)}} />
    <button onClick={()=>{addarray(intext)}}>ADD</button></div>);
}

export default Todoinput