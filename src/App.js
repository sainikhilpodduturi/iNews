import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Navbar from "./components/Navbar";
import News from "./components/News";

const App = () => {
  let apiKey = process.env.REACT_APP_API_KEY;

  let [progress, setprogress] = useState(0);
  let [mode, setMode] = useState('light');

  let setProgress = (progress) => {
    setprogress(progress);
  };

  let changeMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    }
  }


 

  return (
    <div>
      <Router>
        <LoadingBar color="#f11946" progress={progress} />
        <Navbar mode={mode} changeMode={changeMode} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={15}
                category="general"
                country="in"
                apiKey={apiKey}
                mode={mode}
              />
            }
          ></Route>

          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                pageSize={15}
                category="business"
                country="in"
                apiKey={apiKey}
                mode={mode}
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                pageSize={15}
                category="sports"
                country="in"
                apiKey={apiKey}
                mode={mode}
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                pageSize={15}
                category="technology"
                country="in"
                apiKey={apiKey}
                mode={mode}
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                pageSize={15}
                category="entertainment"
                country="in"
                apiKey={apiKey}
                mode={mode}
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                pageSize={15}
                category="health"
                country="in"
                apiKey={apiKey}
                mode={mode}
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                pageSize={15}
                category="science"
                country="in"
                apiKey={apiKey}
                mode={mode}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
