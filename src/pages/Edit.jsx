import React, { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../component/text";
import html2canvas from "html2canvas";

const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const componentRef = useRef();

  const addText = () => {
    setCount(count + 1);
  };

  const downloadImage = async () => {
    if (!componentRef.current) return;

    const canvas = await html2canvas(componentRef.current, {
      useCORS: true,
    });
    
    const dataURL = canvas.toDataURL("image/jpeg");

    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "meme.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div
        ref={componentRef}
        style={{ position: "relative", display: "inline-block" }}
      >
        <img
          onLoad={() => setIsImageLoaded(true)}
          crossOrigin="anonymous"
          src={params.get("url")}
          width="300px"
        />
        {Array(count)
          .fill(0)
          .map((_, i) => (
            <Text key={i} />
          ))}
      </div>

      <button
        onClick={addText}
        style={{
          position: "fixed",
          top: "500px",
          right: "auto",
          zIndex: 9999,
        }}
      >
        Add text
      </button>

      <button onClick={downloadImage}>Download as JPG</button>
    </div>
  );
};

export default EditPage;
