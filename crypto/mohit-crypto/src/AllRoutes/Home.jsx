import React from 'react';
import Mid from '../components/Mid';
import "./Home.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function App() {
  return (
    <div>
      <div className="flex h-screen Mid_section">
        {/* <div>
          <Navbar />
        </div> */}
        <div className="flex items-center ml-20">
          <Mid />
        </div>
      </div>
      {/* Footer is outside of Mid_section */}
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
