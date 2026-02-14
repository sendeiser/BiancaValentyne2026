import React from 'react';
import { motion } from 'framer-motion';
import './Welcome.css';

const Welcome = ({ onEnter }) => {
    const poem = [
        { text: "Casualidad o Destino", isTitle: true },
        { text: "No es solo el amor, es la paz que me regalas,\nesa calma que llega cuando estás cerca de mí.\nContigo el mundo se detiene y el ruido se apaga,\ny por primera vez, me siento bien siendo quien soy, así." },
        { text: "En el vapor de un café compartido\nnace nuestra complicidad más sencilla;\nun silencio que no pesa, un refugio donde habito,\ndonde querernos es la única y mejor rutina." },
        { text: "Mi Bianca, mi dormilona, mi loquita favorita,\nla más bonita que mis ojos han sabido mirar.\nConfieso que vivo un poco loco por ti,\nentre celos que son chispas y enojos que el beso viene a borrar." },
        { text: "Nos reímos de chistes que solo nosotros entendemos,\ny en el plan más cotidiano encuentro mi felicidad.\nEres la única, la primera, el cúmulo de coincidencias\nque me demuestran que lo nuestro no es casualidad." },
        { text: "Tus abrazos son el sitio donde siempre quise estar,\ntus besos, el sello de la vida que soñé.\nEres la mujer perfecta, la que siempre busqué,\ny en cada detalle tuyo, mi amor, me volveré a quedar." }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="welcome-screen"
        >
            <div className="poem-container">
                {poem.map((stanza, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.8, duration: 1 }}
                        className={`stanza ${stanza.isTitle ? 'poem-title' : ''}`}
                    >
                        {stanza.text.split('\n').map((line, j) => (
                            <p key={j}>{line}</p>
                        ))}
                    </motion.div>
                ))}

                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: poem.length * 0.8 + 1 }}
                    onClick={onEnter}
                    className="enter-btn"
                >
                    Empezar nuestro viaje ❤️
                </motion.button>
            </div>

            <div className="floating-hearts">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="heart"
                        initial={{
                            opacity: 0,
                            x: Math.random() * 100 + "vw",
                            y: "110vh"
                        }}
                        animate={{
                            opacity: [0, 0.5, 0],
                            y: "-10vh",
                            x: (Math.random() * 100 - 50) + "vw"
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            delay: Math.random() * 10
                        }}
                    >
                        ❤️
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Welcome;
