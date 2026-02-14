import React from 'react';
import { motion } from 'framer-motion';
import './Scrapbook.css';

const Scrapbook = ({ memories }) => {
    return (
        <div className="scrapbook-view">
            <header className="scrapbook-hero">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="handwritten"
                >
                    Para Bianca
                </motion.h1>
                <p className="subtitle">Nuestra pequeña historia en recortes...</p>
            </header>

            <div className="timeline-container">
                <div className="timeline-line" />
                {memories.map((memory, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                    >
                        <div className="memory-card">
                            <div className="photo-frame">
                                <img src={memory.src} alt={memory.caption} loading="lazy" />
                                <div className="washi-tape" />
                            </div>
                            <div className="memory-info">
                                <span className="date">{memory.date}</span>
                                <p className="caption">{memory.caption}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Scrapbook;
