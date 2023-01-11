import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const onclickUpCase =()=>{
        if(text === ''){
            props.showAlert("Plese Enter somthing in text box ", "danger")
        }
        else{
            let newtext = text.toUpperCase();
            setText(newtext)
            props.showAlert("Text converted uppercase successfully", "success")
        }
        
    }
    const onclickLpCase = ()=>{
        if(text === ''){
            props.showAlert("Plese Enter somthing in text box ", "danger")
        }
        else{
            let newtext = text.toLowerCase();
            setText(newtext)
            props.showAlert("Text converted lowercase successfully", "success")
        }
       
    }
    const cleartext = ()=>{
        if(text === ''){
            props.showAlert("Text box alredy impty ", "danger")
        }
        else{
            let newtext = '';
            setText(newtext)
            props.showAlert("Text box clear successfully", "success")
        }
        
    }
    const onChange =(event)=>{
        // console.log("onChange function is call");
        setText(event.target.value)
    }
    const reversetext = ()=>{
        if(text === ''){
            props.showAlert("Plese Enter somthing in text box ", "danger")
        }
        else{
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
        
    }
    const copyText = ()=>{
        if(text === ''){
            props.showAlert("Plese Enter somthing in text box ", "danger")
        }
        else{
            let text = document.getElementById('MyText');
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("Text copy successfully", "success")
        }
       
    }
    const removeExtraSpacess = ()=>{
        if(text === ''){
            props.showAlert("Plese Enter somthing in text box ", "danger")
        }
        else{
            let newtext = text.split(/[ ]+/);
            setText(newtext.join(" "));
            props.showAlert("Text extra space remove successfully", "success")
        }
        
    }
    const capitalfirstletter = ()=>{
        if(text === ''){
            props.showAlert("Plese Enter somthing in text box ", "danger")
        }
        else{
            let newtext = text.split(" ");

            for (let i = 0, x = newtext.length; i < x; i++) {
                newtext[i] = newtext[i][0].toUpperCase() + newtext[i].substr(1);
            }
            setText(newtext.join(" "));
            props.showAlert("Text every first letter to convert uppercase convert successfully", "success")
        }
    }
    const [text, setText] = useState("");
    return (
        <>
    <div>
        <h2>{props.heading}</h2>
       <div className="mb-3">
         <textarea className="form-control" value={text} onChange={onChange} style= {{background: props.mode === 'light' ? 'white' : '#1d1d1e', color: props.mode === 'light' ? 'black' : 'white'}} id="MyText" rows="8"></textarea>
       </div>
       <button className='btn btn-primary mx-2' onClick={onclickUpCase}>ConvertTextUpperCase</button>
       <button className='btn btn-primary mx-2' onClick={onclickLpCase}>ConvertTextLowerCase</button>
       <button className='btn btn-primary mx-2' onClick={cleartext}>Clear</button>
       <button className='btn btn-primary mx-2' onClick={reversetext}>reverse text</button>
       <button className='btn btn-primary mx-2' onClick={copyText}>copy text</button>
       <button className='btn btn-primary mx-2' onClick={removeExtraSpacess}>remove extra space</button>
       <button className='btn btn-primary mx-2' onClick={capitalfirstletter}>capital first letter</button>
    </div>
    <div className='container my-4'>
        <h3>Your text summary here</h3>
        <p>You enter the <b>{text.split(' ').length -1}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008 * text.split(' ').length}</b> munites to take red this paragraph</p>
        <h3 className='my-3'>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something in the above textbox to preview here"}</p>
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
