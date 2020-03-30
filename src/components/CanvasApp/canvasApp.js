import React,{useRef, useEffect} from 'react'
import Axios from 'axios'
import {fabric} from "fabric"

import "./canvasAppStyle.css"

const CanvasApp = ({height,width,alphabetIs,alphabet,clear,loading,setLoading}) =>{

    const canvas=useRef(null)

    useEffect(()=>{
        canvas.current=new fabric.Canvas('c')
        canvas.current.freeDrawingBrush.width = 8;
        canvas.current.backgroundColor="white";
        canvas.current.isDrawingMode = true;
        canvas.current.freeDrawingBrush.color = '#000000';
        canvas.current.renderAll();
        canvas.current.on('mouse:up',sendPaint)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=>{
        canvas.current.clear();
        canvas.current.backgroundColor="white";
        canvas.current.renderAll();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[clear])

    const sendPaint = (event) =>{
      Axios.post("https://cr-mal.herokuapp.com//predict",{
          canvas: canvas.current.toDataURL("image/png")
      }).then((res)=>{
          alphabetIs(Number(res.data.alphabet))
          setLoading(false)
      })
      canvas.current.renderAll();
      setLoading(true);
    }
    return(
        <div className="canvasAppContainer">   
            <div>
                <canvas height={height} width={width} id="c"/>
            </div>
            <div className="canvas-container canvasImage">
            {loading
                ?<img src={process.env.PUBLIC_URL+`/images/spinner.png`}
                className="icon-spinner" alt="alphabet"/>
                :<img src={process.env.PUBLIC_URL+`/characters/character (${alphabet+1}).svg`}
                 alt="alphabet"/>}
            </div>
           
        </div>
    )
} 

CanvasApp.defaultProps = {
    width:300,
    height:300
}



export default CanvasApp;