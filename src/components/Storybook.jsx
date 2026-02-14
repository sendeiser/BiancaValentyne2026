import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Storybook.css';

const Storybook = ({ memories }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, memories.length - 1));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));

    return (
        <div className="storybook-view">
            <div className="book-wrapper">
                <AnimatePresence mode="popLayout">
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
                                <img src={memories[currentPage].src} alt="Recuerdo" />
                            </div>
                            <div className="page-text">
                                <h3 className="date-badge">{memories[currentPage].date}</h3>
                                <p className="story-text">{memories[currentPage].caption}</p>
                            </div>
                            <div className="page-number-react">{currentPage + 1} / {memories.length}</div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="page-controls">
                    <button onClick={prevPage} disabled={currentPage === 0}>← Anterior</button>
                    <button onClick={nextPage} disabled={currentPage === memories.length - 1}>Siguiente →</button>
                </div>
            </div>
        </div>
    );
};

export default Storybook;
