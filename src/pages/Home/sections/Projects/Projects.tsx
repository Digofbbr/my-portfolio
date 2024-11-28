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

const ProjectSection = styled("div")(({ theme }) => ({
	padding: "50px 0",
	backgroundColor: "#18181B",
}));

const ProjectCardsWrapper = styled("div")({
	display: "flex",
	gap: "32px",
	alignItems: "center",
	flexWrap: "wrap",

	".card-wrapper": {
		opacity: "0",
		flex: "1",
		transform: "translateY(100px)",
	},
});

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
	useGSAP(() => {
		gsap.to(".card-wrapper", {
			opacity: 1,
			y: 0,
			stagger: {
				each: 0.5,
			},
			scrollTrigger: {
				trigger: ".projects-section",
				scrub: false,
				markers: true,
				toggleActions: "play none none none",
			},
		});
	});

	return (
		<ProjectSection className="projects-section">
			<Container>
				<h2>My projects</h2>
				<ProjectCardsWrapper>
					<div className="card-wrapper">
						<ProjectCard></ProjectCard>
					</div>
					<div className="card-wrapper">
						<ProjectCard></ProjectCard>
					</div>
				</ProjectCardsWrapper>
			</Container>
		</ProjectSection>
	);
};

export default Projects;
