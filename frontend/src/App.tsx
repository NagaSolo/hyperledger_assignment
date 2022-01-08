import React from 'react';
import { Home } from './pages/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Tab } from './components/Tab';
import { Address } from './pages/Address';
import { Education } from './pages/Education';
import { Occupation } from './pages/Occupation';

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/address" element={<Address />} />
        <Route path="/edu" element={<Education />} />
        <Route path="/occupation" element={<Occupation />} />
      </Routes>
    </div>
  );
}

export default App;
