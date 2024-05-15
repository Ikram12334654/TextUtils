
import { useState } from "react"
import React  from 'react'


export default function TextForm(props) {
    const[Text, settext]=useState("");
    
    function onclickhandle(event){
    
    settext(event.target.value);
    }
    function convertUpperCase(){
        let uppercase=Text.toUpperCase();
        settext(uppercase);
        props.showalert("converted to uppercase","primary");
    }
    function convertlowerCase(){
        let lowercase=Text.toLowerCase();
        settext(lowercase);
        props.showalert("converted to uppercase","primary");
    }
    function nospacing(){
        const allSpacesRemoved = Text.replaceAll(' ', '');
        settext(allSpacesRemoved);
    }
    function count(){
const wordcounts= Text.length;
alert("the total number is " + wordcounts);

    }

  return (
    <>
    <h4 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h4>
    <div className="mb-3">
    <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#36454F':'white',color:props.mode==='dark'?'white':'black',placeholder:props.mode==='dark'?'white':'black'}}id="exampleFormControlTextarea1" value={Text} onChange={onclickhandle} rows="8" placeholder="enter text here"></textarea>
    <div className="mr-4">
    <button className="btn btn-primary" onClick={convertUpperCase} >Convert to uppercase</button>

<button type="button" className="btn btn-success" onClick={convertlowerCase}>Convert to lowercase</button>
<button type="button" className="btn btn-danger" onClick={nospacing}>no spaceing</button>
<button type="button" className="btn btn-warning" onClick={count}>total number of text </button>
</div>
  </div>
  </>
  )
}
