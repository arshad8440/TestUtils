import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const onclickUpCase =()=>{
            let newtext = text.toUpperCase();
            setText(newtext)
            props.showAlert("Text converted uppercase successfully", "success")
        
    }
    const onclickLpCase = ()=>{
            let newtext = text.toLowerCase();
            setText(newtext)
            props.showAlert("Text converted lowercase successfully", "success")
       
    }
    const cleartext = ()=>{
            let newtext = '';
            setText(newtext)
            props.showAlert("Text box clear successfully", "success")
        
        
    }
    const onChange =(event)=>{
        // console.log("onChange function is call");
        setText(event.target.value)
    }
    const reversetext = ()=>{
            let stack = [];
            // push letter into stack
            for (let i = 0; i < text.length; i++) {
                stack.push(text[i]);
            }
            // pop letter from the stack
            let reverseStr = '';
            while (stack.length > 0) {
                reverseStr += stack.pop();
            }
            setText(reverseStr)
            props.showAlert("Text reverse successfully", "success")
        
    }
    const copyText = ()=>{
            navigator.clipboard.writeText(text);
            props.showAlert("Text copy successfully", "success")
    }
    const removeExtraSpacess = ()=>{
            let newtext = text.split(/[ ]+/);
            setText(newtext.join(" "));
            props.showAlert("Text extra space remove successfully", "success")

        
    }
    const capitalfirstletter = ()=>{
            let newtext = text.split(" ");

            for (let i = 0, x = newtext.length; i < x; i++) {
                newtext[i] = newtext[i][0].toUpperCase() + newtext[i].substr(1);
            }
            setText(newtext.join(" "));
            props.showAlert("Text every first letter to convert uppercase convert successfully", "success")
        
    }
    const [text, setText] = useState("");
    return (
        <>
    <div>
        <h2 className='mb-4'>{props.heading}</h2>
       <div className="mb-3">
         <textarea className="form-control" value={text} onChange={onChange} style= {{background: props.mode === 'light' ? 'white' : '#1d1d1e', color: props.mode === 'light' ? 'black' : 'white'}} id="MyText" rows="8"></textarea>
       </div>
       <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={onclickUpCase}>ConvertTextUpperCase</button>
       <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={onclickLpCase}>ConvertTextLowerCase</button>
       <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={cleartext}>Clear</button>
       <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={reversetext}>reverse text</button>
       <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={copyText}>copy text</button>
       <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={removeExtraSpacess}>remove extra space</button>
       <button disabled={text.length === 0} className='btn btn-primary mx-2 my-2' onClick={capitalfirstletter}>capital first letter</button>
    </div>
    <div className='container my-4'>
        <h3>Your text summary here</h3>
        <p>You enter the <b>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008 * text.split(/\s+/).filter((element)=>{return element.length !== 0}).length}</b> munites to take red this paragraph</p>
        <h3 className='my-3'>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview !"}</p>
    </div>
    </>
  )
}
TextForm.prototype = {
    heading: PropTypes.string,
}
TextForm.defaultProps = {
    heading: 'Enter your heading'
}
