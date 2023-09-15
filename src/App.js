// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const App=()=> {
  let pageSize = 9;
  let apiKey=process.env.REACT_APP_NEWS_API;

  // state={
  //  progress:0
  // }
  // setProgress=(progress)=>{
  //  setState({progress:progress});
  // }
  const [progress,setProgress]=useState(0);
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          {/* <News apiKey={ apiKey} setProgress={ setProgress} pageSize={ pageSize} country="in" category="entertainment" /> */}
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>  
            <Route exact path="/" element={<News apiKey={ apiKey} setProgress={ setProgress} key="general" pageSize={ pageSize} country="in" category="general" />} />
            <Route exact path="/business" element={<News apiKey={ apiKey} setProgress={ setProgress} key="business" pageSize={ pageSize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News apiKey={ apiKey} setProgress={ setProgress} key="entertainment" pageSize={ pageSize} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News apiKey={ apiKey} setProgress={ setProgress} key="general" pageSize={ pageSize} country="in" category="general" />} />
            <Route exact path="/health" element={<News apiKey={ apiKey} setProgress={ setProgress} key="health" pageSize={ pageSize} country="in" category="health" />} />
            <Route exact path="/science" element={<News apiKey={ apiKey} setProgress={ setProgress} key="science" pageSize={ pageSize} country="in" category="science" />} />
            <Route exact path="/sports" element={<News apiKey={ apiKey} setProgress={ setProgress} key="sports" pageSize={ pageSize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News apiKey={ apiKey} setProgress={ setProgress} key="technology" pageSize={ pageSize} country="in" category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  
}

export default App;
