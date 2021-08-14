import React from 'react';
import Header from "./Header"
import Sidebar from "./Sidebar"
import RecommendedVideos from "./RecommendedVideos"
import './App.css';

function App() {
  return (
    <div className="App">

      {/* ------------------------------------------------------- */}
      {/* -------------- Header ---------------- */}
      <Header/>
      {/* ------------------------------------------------------- */}


      {/* ------------------------------------------------------- */}
      {/* -------------- App page ---------------- */}
      <div className="app_page">

        {/* ------ Sidebar ------ */}
        <Sidebar/>

        {/* ------ Videos ------- */}
        <RecommendedVideos/>
      </div>
    </div>
  );
}

export default App;
