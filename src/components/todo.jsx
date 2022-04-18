import { useState } from "react"
import Todoinput from "./todoinputelements";
import Todolist  from "./todoindividual";
import ShowcompleteList from "./showcompletedtodolist"

function TODO ()
{

let [display,displayset]= useState([])

let addarray=(x)=>{
    displayset([...display,x]);
    console.log(display)
}

let [showarray,showarrayset]=useState([]); 

     function Erase(data)
{
    

   
     let element = data;
       
      
     element.classList.add("crossed-line");
     console.log(element.innerText)
     
      let show = [...showarray,element.innerText];
     
    showarrayset(show);
    


}
    return (<div>
                 <Todoinput  addarray={addarray} />   
                  <Todolist array={display} Erase={Erase} />

                  <ShowcompleteList showarray={showarray} />

               
    </div>)
}
export default TODO