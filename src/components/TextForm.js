import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("UpperCased","success")
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("LowerCased","success")
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared","success")
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard","success")
  };
  const handleContactClick = () => {
    window.open("https://thevector.xyz");
  };

  const [text, setText] = useState("");
  // text = "new text"; //Wrong way to change the state
  // setText("new text"); //correct way to change the state
  return (
    
    <>
      <div className="container" style={{color: props.mode==='dark'?"white":"black"}}>
        <h1 className="text-info mt-4 mb-4" >{props.heading}</h1>
        <div className="mb-3">
          <textarea style={{backgroundColor: props.mode==='dark'?"black":"white", color:props.mode==='dark'?"white":"black" }}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className={`btn text-danger btn-primary mx-3 my-1 btn-${props.mode}`} onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button  disabled={text.length===0} className={`btn text-danger btn-primary mx-3 my-1 btn-${props.mode}`} onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button  disabled={text.length===0} className={`btn text-danger btn-primary mx-3 my-1 btn-${props.mode}`} onClick={handleClearClick}>
          Clear
        </button>
        <button  disabled={text.length===0} className={`btn text-danger  btn-primary mx-3 my-1 btn-${props.mode}`} onClick={handleCopyClick}>
          Copy
        </button>
        <button  disabled={text.length===0} className={`btn btn-primary text-danger mx-3 my-1 btn-${props.mode}`} onClick={handleContactClick}>
          Contact us 
        </button>
      </div>
      <div className="container my-3"style={{color: props.mode==='dark'?"white":"black"}}> 
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).filter((a1)=>{return a1.length!==0;}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((a2)=>{return a2.length!==0;}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text:"Nothing to preview"}</p>
      </div>
    </>
  );
}
