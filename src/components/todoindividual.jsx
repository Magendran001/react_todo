import { useState } from "react";
import "./todo.css"
function Todolist({array,Erase})
{ 
     
    

    return (<div> <div>{array.map((ele)=>{return <div className="Flex_todolist"><div onClick={(e)=>{Erase(e.target)}} >{ele}</div>
      <div><button onClick={()=>{console.log("yes")}}>Delete</button></div>
    </div> })}</div>
     
    </div>)
}

export default Todolist

