import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useEffect } from "react";


gsap.registerPlugin(ScrollTrigger)

function App() {

    const lenisRef = useRef()
    
    useEffect(() => {
      function update(time) {
        lenisRef.current?.lenis?.raf(time * 1000)
      }
    
      gsap.ticker.add(update)
      return () => {
        gsap.ticker.remove(update)
      }
    })
    
    useEffect(()=>{
      gsap.set(".gallery-container",{
        yPercent: 100
      })
      const tl = gsap.timeline()
      tl.to(".gallery-container",{
        yPercent: -100,
        duration: 1
      })
      tl.to(".animation:nth-child(1)",{
        clipPath: "inset(0 0 100% 0)",
        duration: 1
      })
      tl.to(".animation:nth-child(2)",{
        clipPath: "inset(0 0 0 100%)",
        duration: 1
      })
      tl.to(".animation:nth-child(3)",{
        clipPath: "inset(0 100% 0 0)",
        duration: 1
      })

      ScrollTrigger.create({
        animation: tl,
        trigger: ".animation-container",
        start: "top top",
        end: "+=2000",
        scrub: 3,
        pin: true
      })
      
    })
  
  return (  
    <div ref={lenisRef} className="container">
      <div className="header">
          <h1 className="header-title">Maximiliano cejas</h1>
          <h2 className="header-title">Frontend developer</h2>
          <h2 className="header-title">&</h2>
          <h2 className="header-title">UX/UI Designer</h2>
      </div>
      <div className="animation-container">
          <div className="animation">
            <img className="img-bg" src="/green.jpg" alt="Green landscape" />
            <p className="animation-property">(Property)</p>
            <h3 className="green-title">Green landscape</h3>
            <div className="gallery-container">
              <img src="/scroll-1.jpg" alt="" className="gallery-img" /><img src="/scroll-2.jpg" alt="" className="gallery-img" /><img src="/mountain-2.jpg" alt="" className="gallery-img" />
            </div>
          </div>
          <div className="animation">
            <img className="img-bg" src="/city.jpg" alt="City" />
            <p className="animation-property">(Property)</p>
            <h3 className="city-title">City</h3>
            <div className="gallery-container">
              <img src="/scroll-1.jpg" alt="" className="gallery-img" /><img src="/scroll-2.jpg" alt="" className="gallery-img" /><img src="/mountain-2.jpg" alt="" className="gallery-img" />
            </div>
          </div>
          <div className="animation">
            <img className="img-bg" src="/ocean.jpg" alt="Ocean" />
            <p className="animation-property">(Property)</p>
            <h3 className="ocean-title">Ocean</h3>
            <div className="gallery-container">
              <img src="/scroll-1.jpg" alt="" className="gallery-img" /><img src="/scroll-2.jpg" alt="" className="gallery-img" /><img src="/mountain-2.jpg" alt="" className="gallery-img" />
            </div>
          </div>
          <div className="animation">
            <img className="img-bg" src="/mountain.jpg" alt="Mountain" />
            <p className="animation-property">(Property)</p>
            <h3 className="mountain-title">Mountain</h3>
            <div className="gallery-container">
              <img src="/scroll-1.jpg" alt="" className="gallery-img" /><img src="/scroll-2.jpg" alt="" className="gallery-img" /><img src="/mountain-2.jpg" alt="" className="gallery-img" />
            </div>
          </div>
      </div>




    </div>

  );
}

export default App;
