import React,{useState} from 'react';

import HeaderApp from './components/HeaderApp/headerApp'
import CanvasApp from './components/CanvasApp/canvasApp'
import Footer from './components/Footer/footer';

import './App.css';

const App =()=>{
  const [alphabet,setAlphabet]=useState(null)
  const [loading,setLoading] =useState(false)
  const [clear,setClear] = useState(false)

  return(
    <div className="appContainer">
      <HeaderApp 
      alphabet={alphabet}
      loading={loading}
      clear={()=>{setClear(!clear)}}
      />
      <CanvasApp 
      alphabetIs={(el)=>{setAlphabet(el)}}
      alphabet={alphabet}
      loading={loading}
      setLoading={setLoading}
      clear={clear}
      />
      <Footer/>
    </div>
  )
}

export default App;
