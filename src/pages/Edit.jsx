import React,{useState,createRef,useRef} from "react";
import {useSearchParams } from "react-router-dom";
import Text from "../component/text";
import { exportComponentAsJPEG } from 'react-component-export-image';
import html2canvas from 'html2canvas';



const EditPage=()=>{
    const [params]=useSearchParams();
    const [count,setCount]=useState(0);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const addText=()=>{
setCount(count + 1 );
    }
    const componentRef=useRef();

  const handleDownload = async () => {
      if (!isImageLoaded) {
    alert("Image is still loading. Please wait.");
    return;
  }
      const canvas = await html2canvas(componentRef.current);
      const dataURL = canvas.toDataURL('image/jpeg');
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'meme.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    
  };
  console.log(componentRef)

    return (
        <div > 
            <div ref={componentRef}   style={{ position: "relative", display: "inline-block" }}>
            <img    onLoad={() => setIsImageLoaded(true)} crossOrigin="anonymous"src={params.get("url")} width="300px"/>
            {
            Array(count).fill(0).map((e)=>(<Text />))
            }
            </div>
          <button onClick={addText} style={{
          position: "fixed",
          top: "500px",
          right: "auto",
          zIndex: 9999,
        }} > Add text</button>  
           <button onClick={handleDownload}>Download as JPG</button>
        </div>
    )
}

export default EditPage;






