import React, { useState, useEffect } from "react";
import { styled, keyframes } from "@mui/material";

// Define os keyframes para o cursor piscante (opacidade muda)
const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

// Componente do texto estilizado
const TypingWrapper = styled("div")(({ theme }) => ({
	fontSize: "40px",
	display: "inline-block",

	[theme.breakpoints.down("sm")]: {
		fontSize: "24px",
	},
}));

// Estilo do cursor piscante
const Cursor = styled("span")`
	display: inline-block;
	width: 2px;
	height: 1em;
	background-color: white; /* Cor do cursor */
	animation: ${blink} 0.7s steps(2, start) infinite; /* Animação de piscar */
`;

const TypingText = () => {
	const text = "I'm a Frontend Developer."; // Texto que será exibido
	const [displayText, setDisplayText] = useState(""); // Texto atual exibido
	const [isDeleting, setIsDeleting] = useState(false); // Indica se está apagando
	const [index, setIndex] = useState(0); // Índice do texto
	const [speed, setSpeed] = useState(150); // Velocidade da digitação

	useEffect(() => {
		const handleTyping = () => {
			if (!isDeleting && index < text.length) {
				// Adiciona uma letra
				setDisplayText((prev) => prev + text[index]);
				setIndex((prev) => prev + 1);
				setSpeed(150); // Velocidade normal ao digitar
			} else if (isDeleting && index > 0) {
				// Remove uma letra
				setDisplayText((prev) => prev.slice(0, -1));
				setIndex((prev) => prev - 1);
				setSpeed(50); // Velocidade mais rápida ao apagar
			} else if (!isDeleting && index === text.length) {
				// Pausa antes de apagar
				setTimeout(() => setIsDeleting(true), 3000);
			} else if (isDeleting && index === 0) {
				// Recomeça o texto
				setIsDeleting(false);
			}
		};

		const timeout = setTimeout(handleTyping, speed);
		return () => clearTimeout(timeout); // Limpa o timeout para evitar sobrecarga
	}, [index, isDeleting, speed]);

	return (
		<TypingWrapper>
			{displayText}
			<Cursor /> {/* Cursor com animação */}
		</TypingWrapper>
	);
};

export default TypingText;
