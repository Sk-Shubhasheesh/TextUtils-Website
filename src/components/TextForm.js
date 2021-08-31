// props and State concept
import React, {useState} from 'react';


export default function TextForm(props) {
    const handleUpClick = ()=>{
        
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to upperCase", "success");
    }
    const handleLoClick = ()=>{
        
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to lowerCase", "success");
    }
    
    const handleClearClick = ()=>{
        
        let newText = "";
        setText(newText);
        props.showAlert(" Text Cleared", "success");
    }
    const handleCopy = ()=>{
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Copy to Clipbord", "success");
        

    }
    const handleExtraSpaces = () => {
        var newt = text.split(/[ ]+/);
        setText(newt.join(" "))
        props.showAlert(" Extra spaces removed", "success");
    }
    
    const handleOnChange = (event)=>{
      
      // handle event 
      setText(event.target.value);    
    };
    const [text, setText] = useState('');

    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
           <h1>{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control" 
                value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white', color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase </button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase </button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}Minute Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
        </div>
        </>
            )
}
