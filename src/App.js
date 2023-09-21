import React, { useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Header from './components/header/Header';
import Divider from './components/divider/Divider';
import Feed from './components/feed/Feed';
import BotMenu from './components/botmenu/BotMenu';
import UploadPage from './components/UploadPage';
import DocumentPage from './components/DocumentPage';
import './App.css';


function App() {

  useEffect(() => {
    const height = window.innerHeight;
    const width = window.innerWidth;

    // Create a style element
    let style = document.createElement('style');

    style.innerHTML = `
      .app {
        height: ${height}px;
        width: ${width * 2}px;
        display: flex;
        flex-direction: row; 
      }

      .tile {
        height: ${height}px;
        width: ${width}px;
        display: flex;
        flex-direction: column; 
      }

      .tile-a {
        height: ${height}px;
        width: ${width}px;
        border: 2px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
      }

      .tile-b {
        height: ${height}px;
        width: ${width}px;
        border: 2px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
      }
    `;

    document.head.appendChild(style);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="app">
            <div className="tile tile-a">
              <Header />
              <Divider />
              <Feed />
              <BotMenu />
            </div>
            <div className="tile tile-b">Tile B</div>
          </div>
        } />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/document" element={<DocumentPage />} />
      </Routes>
    </Router>
  );
}


export default App;
