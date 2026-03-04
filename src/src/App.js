import { useEffect } from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
// import { CSSTransition, SwitchTransition } from 'react-transition-group'

// import { useRef } from "react"

import './App.css'
import HomeView from './components/HomeView'
import PhotoGallery from './components/PhotoGallery'
import PhotoDisplay from './components/PhotoDisplay'

function App() {

  const location = useLocation();
  const state = location.state;
  // const nodeRef = useRef(null);

  useEffect(() => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location.pathname]);
  
  return (    
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<HomeView />} />
        <Route path="/gallery" element={<PhotoGallery />} />
      </Routes>

      {state?.backgroundLocation && (
        <div className="single-photo">
          <Routes>
            <Route path='/photo/:back/:filename' element={<PhotoDisplay />} />
          </Routes>
        </div>
      )}


      {/* <SwitchTransition mode="out-in">
        <CSSTransition key={location.pathname} nodeRef={nodeRef} classNames="fade" timeout={500} appear>
          <div ref={nodeRef}>

            <Routes location={location}>
              <Route path='/photo/:back/:filename' element={<PhotoDisplay />} />
            </Routes>
          </div>

        </CSSTransition>
      </SwitchTransition> */}
    </>

  );
}

export default App;
