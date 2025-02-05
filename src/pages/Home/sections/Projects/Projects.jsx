import { useEffect, useRef } from "react";
import { Container, styled } from "@mui/material";
import ProjectCard from "./ProjectCard";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
import RecipeImg from "../../../../assets/images/receitas.webp";
import DrinkImg from "../../../../assets/images/drinks.webp";
import PizzaImg from "../../../../assets/images/pizzapp.png";
import MovieImg from "../../../../assets/images/usepopcorn.png";
import BookImg from "../../../../assets/images/bookstore.png";
import OufiroImg from "../../../../assets/images/outfiro.png"
import PetshopImg from "../../../../assets/images/petshop.png"

const projectsInfo = [
	{
		name: "Outfiro E-commerce",
		live_url: "https://outfiro-ecommerce-frontend.vercel.app/",
		github_code: "https://github.com/Digofbbr/outfiro-ecommerce-frontend",
		image: OufiroImg,
		tags: ["React", "Tailwind", "ContextAPI", "React Router"],
	},
	{
		name: "Recipe App",
		live_url: "https://receitas-one.vercel.app/",
		github_code: "https://github.com/Digofbbr/receitas",
		image: RecipeImg,
		tags: ["React", "Styled Components", "Api"],
	},
	{
		name: "Drinking App",
		live_url: "https://drinks-list.vercel.app/",
		github_code: "https://github.com/Digofbbr/Drinks-list",
		image: DrinkImg,
		tags: ["React", "Api", "React Router"],
	},
	{
		name: "Petshop Landing Page",
		live_url: "https://petshop-lp.vercel.app/",
		github_code: "https://github.com/Digofbbr/petshop-lp",
		image: PetshopImg,
		tags: ["React", "Tailwind"],
	},
	{
		name: "Movie Ratings",
		live_url: "https://use-popcorn-rouge.vercel.app/",
		github_code: "https://github.com/Digofbbr/use-popcorn",
		image: MovieImg,
		tags: ["React", "Api"],
	},
	{
		name: "Pizza App",
		live_url: "https://pizza-app-ten-xi.vercel.app/",
		github_code: "https://github.com/Digofbbr/pizza-app",
		image: PizzaImg,
		tags: ["React", "Tailwind", "Redux Toolkit", "React Router"],
	},
	{
		name: "Book Store",
		live_url: "https://book-store-frontend-two-zeta.vercel.app/",
		github_code: "https://github.com/Digofbbr/book-store-frontend",
		image: BookImg,
		tags: ["React", "Tailwind", "Redux Toolkit", "Firebase", "React Router"],
	},
];

const ProjectSection = styled("div")(() => ({
	padding: "50px 0",
	backgroundColor: "#18181B",
	position: "relative",

	h2: {
		color: "white",
		fontSize: "40px",
		marginBottom: "50px",
		marginTop: "0px",
	},

	".section-title": {
		textAlign: "center",
	},
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

/* const TriangleDown = styled("div")({
	width: "0",
	height: "0",
	borderStyle: "solid",
	borderWidth: "0 0 100px 50vw",
	borderColor: "transparent transparent transparent #232323",
	position: "absolute",
	top: "0",
	left: "0",
}); */

const TriangleDown = styled("div")({
	width: "50vw", // A largura é total da tela
	height: "100px", // Altura do triângulo
	background: "linear-gradient(#232323, #18181B)",
	clipPath: "polygon(100% 0, 0 0, 0 100%)",
	position: "absolute",
	top: "0",
	left: "0",
});

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
						start: "top 90%",
						end: "bottom center",
						scrub: false,
						markers: false,
						toggleActions: "play none none none",
					},
					stagger: 0.5,
					delay: index * 0.3,
				}
			);
		});
	});
	return (
		<ProjectSection className="projects-section" id="projects">
			<Container>
				<h2 className="section-title">My projects</h2>
				<ProjectCardsWrapper>
					{projectsInfo.map((project, index) => {
						return (
							<div className="card-wrapper" key={index}>
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
			<TriangleDown></TriangleDown>
		</ProjectSection>
	);
};

export default Projects;
