import { useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import SideBar from "./SideBar.jsx";
import RecommondationVideos from "./RecommondationVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage.jsx";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route path="/search">
              <div className="app-page">
                <SideBar />
                <SearchPage />
              </div>
            </Route>
            <Route path="/">
              <div className="app-page">
                <SideBar />
                <RecommondationVideos />
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
