import React, {useReducer, useRef, useState } from 'react'
import '../App.css'
function Taskadder() {
    const [content,setContent] = useState("")
    const [allData,setAllData] = useState([])
    
    const [written,dispatch] = useReducer(reducer,content)
    function reducer(state,action){
        switch(action.type){
            case "hide":
                return state = content
                
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
    const handleClick =()=>{
        if(content!==""){
            setAllData(newData=>[...newData,content])
            setContent('')
        }
    }
    const inputref = useRef()
   const addFocus=()=>{
    inputref.current.focus()
   } 
      
   
    
   
  return (
    <div >
      <input ref={inputref} type="text" value={content} onChange={(e)=>setContent(e.target.value)} />
      <button onClick={handleClick}>Add</button>
      {
        allData.map((item,i)=>
        <div style={{backgroundColor:"cyan"}}>
        <div><h2>{item}</h2></div>
        <button onClick={toggleFunc} >Toggle</button>
        </div>
        )
      }
      <button onClick={addFocus}>Go to Input</button>
    </div>
  )
}

export default Taskadder
