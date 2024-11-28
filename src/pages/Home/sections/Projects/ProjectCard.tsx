import { styled } from "@mui/material";
import React from "react";
import Avatar from "../../../../assets/images/lego.jpg";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const ProjectCardStyled = styled("div")({
	position: "relative",
	padding: "16px",
	borderRadius: "1rem",
	background: "#27272A",
	border: "1px solid #A3A3A3",
	flex: "1",
	img: {
		borderRadius: "26px",
		objectFit: "cover",
		width: "100%",
	},

	".text-content": {
		display: "flex",
		alignItems: "baseline",
		justifyContent: "space-between",
	},

	h3: {
		fontSize: "22px",
		color: "#fafafa",
	},

	".tag-wrapper": {
		display: "flex",
		flexWrap: "wrap",
		alignItems: "center",
		gap: "8px",
	},

	span: {
		fontSize: "12px",
		color: "#999999",
		padding: "5px 10px",
		background: "#FAFAFA0D",
		borderRadius: "6px",
	},

	".icon-to-webpage": {
		borderRadius: "6px",
		background: "#38bdf8",
		color: "#09090B",
		fontSize: "10px",
		display: "grid",
		height: "30px",
		width: "30px",
		placeItems: "center",
		flexShrink: "0",
	},
});

const ProjectCard = ({ image, name }) => {
	return (
		<ProjectCardStyled>
			<img src={Avatar} alt="Project image" />
			<div className="text-content">
				<div>
					<h3>Nome do projeto</h3>
					<div className="tag-wrapper">
						<span>html</span>
						<span>redux</span>
					</div>
				</div>
				<div className="icon-to-webpage">
					<ArrowOutwardIcon style={{ fontSize: "20px" }} />
				</div>
			</div>
		</ProjectCardStyled>
	);
};

export default ProjectCard;
