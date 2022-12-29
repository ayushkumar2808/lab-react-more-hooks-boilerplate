import React, {useReducer, useState} from 'react'



function Abc() {
const [text,setText] = useState("ABCD")

const [written,dispatch] = useReducer(reducer,text)
function reducer(state,action){
    switch(action.type){
        case "hide":
            return state = text
         case "show":
            return state ="Hidden"
        default:
            return state
    }
    
    }

function toggleFunc(){
    if(written==="Hidden"){
        dispatch({type:'hide'})
    }
    else{
        dispatch({type:'show'})
    }
    
}

  return (
    <div>
      <h1>{written}</h1>
      <button onClick={toggleFunc}>Toggleeeee</button>
    </div>
  )
}

export default Abc
