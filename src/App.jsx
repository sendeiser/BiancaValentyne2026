import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { memories } from './data/memories';
import Scrapbook from './components/Scrapbook';
import Gallery from './components/Gallery';
import Storybook from './components/Storybook';
import './App.css';

const Navigation = () => {
    const location = useLocation();
    return (
        <nav className="version-nav">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                <span className="nav-text">Alba</span>
            </Link>
            <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>
                <span className="nav-text">Muro</span>
            </Link>
            <Link to="/book" className={location.pathname === '/book' ? 'active' : ''}>
                <span className="nav-text">Libro</span>
            </Link>
        </nav>
    );
};

const MusicPlayer = () => (
    <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        className="music-player-react"
    >
        <iframe
            width="0"
            height="0"
            src="https://www.youtube.com/embed/wkSjA-FkmsY?si=hlGW3KJ4mBqv7-Uf&start=54&autoplay=1&loop=1&playlist=wkSjA-FkmsY"
            frameBorder="0"
            allow="autoplay"
        ></iframe>
        <div className="visualizer">
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{ height: ["20%", "100%", "20%"] }}
                    transition={{ repeat: Infinity, duration: 0.5 + i * 0.1, ease: "easeInOut" }}
                    className="bar"
                />
            ))}
        </div>
        <div className="song-info">
            <span className="song-title">Your Song</span>
            <span className="artist">Elton John</span>
        </div>
    </motion.div>
);

function App() {
    return (
        <Router>
            <div className="app-container">
                <Navigation />
                <MusicPlayer />

                <main className="content">
                    <AnimatePresence mode="wait">
                        <Routes>
                            <Route path="/" element={<Scrapbook memories={memories} />} />
                            <Route path="/gallery" element={<Gallery memories={memories} />} />
                            <Route path="/book" element={<Storybook memories={memories} />} />
                        </Routes>
                    </AnimatePresence>
                </main>
            </div>
        </Router>
    );
}

export default App;
