import React,{useState,useRef}  from "react";
import Draggable from "react-draggable";

const Text =()=>{
    const [text,setText]=useState("double click to edit text");
    const [isedit,setIsEdit]=useState(false);

    const nodeRef=useRef(null);
    const handleChange=(e)=>{
        setText(e.target.value)
    }
    const handleDoubleClick=()=>{
        setIsEdit(!isedit);

    }
    return (
        <Draggable nodeRef={nodeRef}> 
            <div ref={nodeRef}>
             {isedit?<input value={text} onChange={handleChange} onDoubleClick={handleDoubleClick} />:<h1 onDoubleClick={handleDoubleClick}>{text}</h1>}
        </div>
        </Draggable>
    )
}

export default Text;