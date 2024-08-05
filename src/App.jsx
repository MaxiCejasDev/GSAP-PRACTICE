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
    
 
  
  return (  
    <div ref={lenisRef} className="container">
      <div className="header">
          <h1 className="header-title">maximiliano cejas</h1>
          <h2 className="header-title">frontend developer</h2>
          <h2 className="header-title">&</h2>
          <h2 className="header-title">ux/ui designer</h2>
      </div>
      <div className="animation-container">
          <div className="animation">
            <img className="img-bg" src="/green.jpg" alt="Green landscape" />
            <p className="animation-property">(Property)</p>
            <h3 className="animation-title">Green landscape</h3>
            <div className="gallery-container">
              <img src="/scroll-1.jpg" alt="" className="gallery-img" /><img src="/scroll-2.jpg" alt="" className="gallery-img" /><img src="/mountain-2.jpg" alt="" className="gallery-img" />
            </div>
          </div>
          <div className="animation">
            <img className="img-bg" src="/city.jpg" alt="City" />
            <p className="animation-property">(Property)</p>
            <h3 className="animation-title">City</h3>
            <div className="gallery-container">
              <img src="/scroll-1.jpg" alt="" className="gallery-img" /><img src="/scroll-2.jpg" alt="" className="gallery-img" /><img src="/mountain-2.jpg" alt="" className="gallery-img" />
            </div>
          </div>
          <div className="animation">
            <img className="img-bg" src="/ocean.jpg" alt="Ocean" />
            <p className="animation-property">(Property)</p>
            <h3 className="animation-title">Ocean</h3>
            <div className="gallery-container">
              <img src="/scroll-1.jpg" alt="" className="gallery-img" /><img src="/scroll-2.jpg" alt="" className="gallery-img" /><img src="/mountain-2.jpg" alt="" className="gallery-img" />
            </div>
          </div>
          <div className="animation">
            <img className="img-bg" src="/mountain.jpg" alt="Mountain" />
            <p className="animation-property">(Property)</p>
            <h3 className="animation-title">Mountain</h3>
            <div className="gallery-container">
              <img src="/scroll-1.jpg" alt="" className="gallery-img" /><img src="/scroll-2.jpg" alt="" className="gallery-img" /><img src="/mountain-2.jpg" alt="" className="gallery-img" />
            </div>
          </div>
      </div>




    </div>

  );
}

export default App;
