import { styled } from "@mui/material";
import React from "react";
import Avatar from "../../../../assets/images/lego.jpg";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

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
		flexDirection: "column",
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

	".card-action-buttons": {
		display: "flex", // Flex container
		alignItems: "center", // Alinhamento vertical
		paddingTop: "24px", // Remove padding superior (pt-0)
		marginTop: "auto",
		gap: "1rem",
	},
});

const AnchorTag = styled("a")(({ theme }) => ({
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	whiteSpace: "nowrap",
	fontSize: theme.typography.pxToRem(14), // Equivalente ao texto "sm"
	fontWeight: 500, // "medium"
	border: `1px solid ${theme.palette.divider}`, // Equivalente ao "border-input"
	backgroundColor: theme.palette.background.default, // "bg-background"
	height: "2.25rem", // 36px (h-9)
	borderRadius: theme.shape.borderRadius, // "rounded-md"
	padding: "0 0.75rem", // px-3
	color: theme.palette.text.primary,
	cursor: "pointer",
	textDecoration: "none",
	transition: theme.transitions.create(["background-color", "color"], {
		duration: theme.transitions.duration.short,
	}),

	"&:hover": {
		backgroundColor: "hsl(0, 0%, 74.50980392156863%)", // "hover:bg-accent"
	},

	"&:focus-visible": {
		outline: "none",
		boxShadow: `0 0 0 2px ${theme.palette.primary.main}, 0 0 0 4px ${theme.palette.background.default}`, // "focus-visible:ring"
	},

	"&:disabled": {
		pointerEvents: "none",
		opacity: 0.5,
	},
}));

const ProjectCard = ({ image, name, github_code, live_url, tags }) => {
	return (
		<ProjectCardStyled>
			<img src={image} alt={name} className="project-image" />
			<div className="text-content">
				<div>
					<h3>{name}</h3>
					<div className="tag-wrapper">
						{tags.map((tag) => (
							<span>{tag}</span>
						))}
					</div>
				</div>

				<div className="card-action-buttons">
					<AnchorTag href={github_code} target="_blank">
						<GitHubIcon sx={{ fontSize: 16, marginRight: 1 }} />
						Github
					</AnchorTag>
					<AnchorTag href={live_url} target="_blank">
						<LanguageIcon sx={{ fontSize: 16, marginRight: 1 }} />
						Live demo
					</AnchorTag>
				</div>
			</div>
		</ProjectCardStyled>
	);
};

export default ProjectCard;
