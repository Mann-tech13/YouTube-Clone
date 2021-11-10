import React from 'react';
import Header from "./Header"
import Sidebar from "./Sidebar"
import RecommendedVideos from "./RecommendedVideos"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import SearchPage from "./SearchPage"

function App() {
  return (
    <div className="App">  

    <Router>
      <Switch>
        
        <Route path="/search/:searchTerm">
          <Header/>
          <div className="app_page">
            <Sidebar/>
            <SearchPage/>
          </div>
        </Route>
        <Route path="/">
          <Header/>
          <div className="app_page">
            <Sidebar/>
            <RecommendedVideos/>
          </div>
        </Route>
      </Switch>
    </Router>
    {/* <Header/>
      <div className="app_page">
        <Sidebar/>
        <RecommendedVideos/>
      </div> */}
    </div>
  );
}

export default App;
