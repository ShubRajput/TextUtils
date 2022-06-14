import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter the Text Here");
  // const [color, setColor] = useState('red');
  const [textAreaStyle, setTextAreaStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });
  const [btnTxtStlye, setbtnTxtStyle] = useState("Enabel Dark Mode");

  const handleUpClick = () => {
    console.log("UpperCase Was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleDownClick = () => {
    console.log("DownCase Was Clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const handleteimclick = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
  };

  const handleCopy = () => {
    
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    
}

  //   const handleFontColor = (event) => {
  // console.log('lets change color');
  //   // let newText=event.color = 'yellow';
  //   //const nextColor = textColor ==='Red'? "yellow" : "green"
  //   // let newText = setTextColor='yellow';
  //   // setText(newText);
  //   //text.style.color='red';
  //   document.getElementById('exampleFormControlTextarea1').style.color='red';

  //  };

  const handleClear = (event) => {
    let newText = text;
    newText = "";
    setText(newText);
  };

  const toggleMode = () => {
    if (textAreaStyle.color == "black") {
      setTextAreaStyle({
        backgroundColor: "black",
        color: "white",
      });
      setbtnTxtStyle("Enable Light mode");
    } else {
      setTextAreaStyle({
        backgroundColor: "white",
        color: "black",
      });
      setbtnTxtStyle("Enable Dark mode");
    }
  };

  return (
    <div className="container" >
      <h2>{props.heading}</h2>
      <div className="form-group">
        <textarea
          className="form-control"
          style={textAreaStyle}
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
          

        ></textarea>
      </div>
      <button className="btn btn-danger mx-2" onClick={handleUpClick}>
        Convert To Upper Case{" "}
      </button>
      <button className="btn btn-info mx-2" onClick={handleDownClick}>
        Convert To Lower Case{" "}
      </button>

      {/* <button className="btn btn-danger mx-2" onClick={handleFontColor}>
        Change Font
      </button> */}

      <button className="btn btn-danger mx-2" onClick={handleClear}>
        Clear
      </button>

      <button className="btn btn-danger mx-2" onClick={toggleMode}>
        {btnTxtStlye}
      </button>

      <button className="btn btn-danger mx-2" onClick={handleteimclick}>
        Remove Extra Sapces
      </button>

      <button
        className="btn btn-danger mx-2"
        onClick={handleCopy}
      >
        Copy
      </button>

      <div className="container">
        <h2>Your Text Summary</h2>
        <p>Word Entered={text.split(" ").length-1}</p>
        <p>Character Enter={text.length}</p>
        <p>
          Time Requires to read the whole Text={0.008 * text.split(" ").length}{" "}
          min.
        </p>
      </div>
    </div>
  );
}
