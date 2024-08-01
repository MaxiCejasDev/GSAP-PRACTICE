import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger)

function App() {
  
  useEffect(()=>{
    let tl = gsap.timeline({
      scrollTrigger :{
        trigger: ".container",
        start: "top top",
        end: "+=2500",
        pin: true,
        pinSpacer: false,
        markers: true,
        scrub: 3,
      }
    })
    tl.to(".box-1",{
      top: "100vh",
      duration: 2
    })
    tl.to(".box-2",{
      left: "100vw",
      duration: 2
    })

  },[])



  return (
  <div className="container">
    <div className="box-1">
      <img src="/1.jpg" alt="" />
    </div>
    <div className="box-2">
      <img src="/2.jpg" alt="" />
    </div>
    <div className="box-3">
      <img src="/3.jpg" alt="" />
    </div>
  </div>
  );
}

export default App;
