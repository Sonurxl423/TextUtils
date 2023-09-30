import React, { useState } from "react";


export default function Textform(props) {
  // setText("New text can be written here .");
  const [text, setText] = useState("");


  const handleupclick = () => {
    // console.log("Uppercase botton is clicked"+ text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase ","success");
  };

  const handleloclick = () => {
    // console.log("Uppercase botton is clicked"+ text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase ","success");
  };


  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };


  return (
    <>
    <div style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3" >
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'#2f346e':'white',color:props.mode==='dark'?'white':'black'}}
          
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
        <button disabled={text.length===0} className="btn bg-primary my-3 " onClick={handleupclick}>
          Convert to uppercase
        </button>
        <button disabled={text.length===0} className="btn bg-primary my-3 mx-1" onClick={handleloclick}>
          Convert to lowercase
        </button>
      </div>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary here</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the above textbox to preview it here "}</p>

    </div>
    </>
  );
}
