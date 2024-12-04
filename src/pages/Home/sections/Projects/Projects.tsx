import React, { useEffect, useRef } from "react";
import {
	Button,
	Container,
	styled,
	Box,
	keyframes,
	Link,
	Snackbar,
	Alert,
} from "@mui/material";
import ProjectCard from "./ProjectCard";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
import Avatar from "../../../../assets/images/lego.jpg";

const projectsInfo = [
	{
		name: "Recipe App",
		live_url: "https://receitas-one.vercel.app/",
		github_code: "https://github.com/Digofbbr/receitas",
		image: Avatar,
		tags: ["React", "Styled Components", "Api"],
	},
	{
		name: "Drinking App",
		live_url: "https://drinks-list.vercel.app/",
		github_code: "https://github.com/Digofbbr/Drinks-list",
		image: "",
		tags: ["React", "Api"],
	},
	{
		name: "Recipe App",
		live_url: "https://receitas-one.vercel.app/",
		github_code: "https://github.com/Digofbbr/receitas",
		image: Avatar,
		tags: ["React", "Styled Components", "Api"],
	},
	{
		name: "Drinking App",
		live_url: "https://drinks-list.vercel.app/",
		github_code: "https://github.com/Digofbbr/Drinks-list",
		image: "",
		tags: ["React", "Api"],
	},
	{
		name: "Book Store",
		live_url: "https://book-store-frontend-two-zeta.vercel.app/",
		github_code: "https://github.com/Digofbbr/book-store-frontend",
		image: "",
		tags: ["React", "Tailwind", "Redux", "Firebase"],
	},
];

const ProjectSection = styled("div")(({ theme }) => ({
	padding: "50px 0",
	backgroundColor: "#18181B",
}));

const ProjectCardsWrapper = styled("div")(({ theme }) => ({
	//display: "flex",
	//gap: "32px",
	//alignItems: "center",
	//flexWrap: "wrap",

	display: "grid",
	gridTemplateColumns: "1fr" /* 1 coluna padrão */,
	gap: "2rem" /* Espaçamento entre os itens */,

	[theme.breakpoints.up("md")]: {
		gridTemplateColumns: "repeat(2, 1fr)", // 2 colunas em telas médias
	},

	[theme.breakpoints.up("lg")]: {
		gridTemplateColumns: "repeat(3, 1fr)", // 3 colunas em telas grandes
	},

	".card-wrapper": {
		opacity: "0",
		flex: "1",
		transform: "translateY(100px)",
	},
}));

const Projects = () => {
	useGSAP(() => {
		const cards = gsap.utils.toArray(".card-wrapper");

		gsap.utils.toArray(cards).forEach((card, index) => {
			gsap.fromTo(
				card,
				{ opacity: 0, y: 50 },
				{
					opacity: 1,
					y: 0,
					scrollTrigger: {
						trigger: card,
						start: "top 80%",
						end: "bottom center",
						scrub: false,
						markers: true,
						toggleActions: "play none none none",
					},
					stagger: 0.5,
					delay: index * 0.3,
				}
			);
		});
	});
	return (
		<ProjectSection className="projects-section">
			<Container>
				<h2>My projects</h2>
				<ProjectCardsWrapper>
					{projectsInfo.map((project) => {
						return (
							<div className="card-wrapper">
								<ProjectCard
									name={project.name}
									tags={project.tags}
									live_url={project.live_url}
									github_code={project.github_code}
									image={project.image}
								></ProjectCard>
							</div>
						);
					})}
				</ProjectCardsWrapper>
			</Container>
		</ProjectSection>
	);
};

export default Projects;
