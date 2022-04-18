import { useState } from "react"

function ShowcompleteList({showarray})
{
    // console.log(data,"data")
    let [compltelist,completelistchange]=useState([]);

    function completefunc(x)
    {
        completelistchange(x)  
    }

    return (<div><button onClick={()=>{completefunc(showarray)}}> Completed Todo</button>
           <div>{compltelist.map((E)=>{ return <div>{E}</div>})}</div>
    </div>)
}
export default ShowcompleteList