import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { useRef } from "react";

import './App.css';
import HomeView from './components/HomeView';
import PhotoGallery from './components/PhotoGallery';

import PhotoDisplay from './components/PhotoDisplay';

function App() {

  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    
    <SwitchTransition mode="out-in">
      <CSSTransition key={location.pathname} nodeRef={nodeRef} classNames="fade" timeout={500} appear>
        <div ref={nodeRef}>

          <Routes location={location}>
            <Route path='/' element={<HomeView />} />
            <Route path='/photo/:back/:filename' element={<PhotoDisplay />} />

            <Route path='/gallery' element={<PhotoGallery />} />
          </Routes>
        </div>

      </CSSTransition>
    </SwitchTransition>
  );
}

export default App;
