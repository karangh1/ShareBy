import './App.css';
import {useRef, useEffect, useState } from 'react'
import upload from './upload';
import img1 from "./images/ast1.png"
import img2 from "./images/ast2.png"
import img3 from "./images/ast3.png"
import img4 from "./images/ast4.png"
function App() {

  const [file,setFile]= useState('');
  const [result,setResult]= useState('');
  const inputeFile= useRef();

  useEffect(()=>{
    if(file){
      const getFile = async ()=>{
        const data = new FormData();
        data.append("name",file.name);   
        data.append("file",file);
        let response = await upload(data);
        setResult(response.path);
     }  
     getFile();
    } },[file])
  
  const uploadFile = ()=>{
    inputeFile.current.click();
  }
  
  return (
    <>
      <div className="body">
        <h1 className='head'>Share by</h1>
        <div className="container">
            <div className="f1">
                <div className="img">
                    <img src={img1} alt="" />
                </div>
                <div className="img">
                    <img src={img2} alt="" />
                </div>
            </div>
            <div className="f2"> 
              <h1>Upload Your Files Here</h1>
              <h2>Upload and copy the download link below</h2> 
              <button onClick={()=>uploadFile()} >Upload</button>
              <input type="file" ref={inputeFile} style={{ display:"none" }} 
              onChange={(e)=> setFile(e.target.files[0])}/>
              <a href={result} id='link'> {result}</a>
            </div>
            <div className="f3">
                <div className="img">
                    <img src={img3} alt="" />
                </div>
                <div className="img">
                    <img src={img4} alt="" />
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
