import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger)

function App() {
  
  useEffect(()=>{
    
    const boxes = gsap.utils.toArray('.box')
    boxes.forEach((box)=>{
      let tl = gsap.timeline()
      tl.to(box, {y: 100, duration: 2})
      .to(box,{y:0, duration: 2})
    })
  },[])
 

  return (  
    <div className="container">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </div>

  );
}

export default App;
