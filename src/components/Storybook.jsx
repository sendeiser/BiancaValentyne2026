import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Storybook.css';

const Storybook = ({ memories }) => {
    const [currentPage, setCurrentPage] = useState(-1); // -1 is the cover

    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, memories.length - 1));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, -1));

    return (
        <div className="storybook-view">
            <div className="book-wrapper" onClick={nextPage} onContextMenu={(e) => { e.preventDefault(); prevPage(); }}>
                <AnimatePresence mode="popLayout">
                    {currentPage === -1 ? (
                        <motion.div
                            key="cover"
                            initial={{ rotateY: 90, opacity: 0 }}
                            animate={{ rotateY: 0, opacity: 1 }}
                            exit={{ rotateY: -90, opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="book-page cover"
                        >
                            <div className="page-paper cover-paper">
                                <div className="cover-content">
                                    <h1 className="cover-title">Nuestra Historia</h1>
                                    <div className="cover-decoration">❤️</div>
                                    <p className="cover-names">Bianca & Tin</p>
                                    <p className="cover-date">San Valentín 2026</p>
                                </div>
                                <div className="corner-hint">Haz click para abrir ➔</div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key={currentPage}
                            initial={{ rotateY: 90, opacity: 0 }}
                            animate={{ rotateY: 0, opacity: 1 }}
                            exit={{ rotateY: -90, opacity: 0 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="book-page"
                        >
                            <div className="page-paper">
                                <div className="memory-frame">
                                    <img src={memories[currentPage].src} alt="Recuerdo" loading="lazy" />
                                </div>
                                <div className="page-text">
                                    <h3 className="date-badge">{memories[currentPage].date}</h3>
                                    <p className="story-text">{memories[currentPage].caption}</p>
                                </div>
                                <div className="page-number-react">{currentPage + 1} / {memories.length}</div>
                                <div className="tap-hint">Siguiente →</div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {currentPage >= 0 && (
                    <div className="back-btn" onClick={(e) => { e.stopPropagation(); prevPage(); }}>
                        ← Volver
                    </div>
                )}
            </div>
        </div>
    );
};

export default Storybook;
