import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = ({ memories }) => {
    return (
        <div className="gallery-view">
            <header className="gallery-header">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="serif"
                >
                    "Para mi corazón basta tu pecho, para tu libertad bastan mis alas."
                </motion.h1>
            </header>

            <div className="gallery-grid">
                {memories.map((memory, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index % 3 * 0.1 }}
                        className="gallery-item"
                    >
                        <div className="image-container">
                            <img src={memory.src} alt={memory.caption} loading="lazy" />
                            <div className="overlay">
                                <span className="serif">{memory.date}</span>
                                <p>{memory.caption}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
