import { Container, styled, Typography, Grid, Box } from "@mui/material";
// import Grid from '@mui/material/Grid2';
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground";
import { useEffect, useState } from "react";
import TypingText from "../../../../components/TypingText";

const Hero = () => {
	const StyledHero = styled("div")(({ theme }) => ({
		backgroundColor: theme.palette.primary.main,
		minHeight: "100vh",
		display: "flex",
		alignItems: "center",
		position: "relative",
		[theme.breakpoints.down("md")]: {
			paddingTop: "100px",
			paddingBottom: "50px",
		},
	}));

	const StyledAvatar = styled("img")({
		borderRadius: "50%",
		border: "2px solid white",
		width: "80%",
		aspectRatio: '1/1',
		zIndex: 10,
	});

	/* 	const TriangleUp = styled("div")({
		width: "0",
		height: "0",
		borderStyle: "solid",
		borderWidth: "0 0 100px 50vw",
		borderColor: "transparent  transparent #18181B transparent",
		position: "absolute",
		bottom: "0",
		right: "0",
	}) */

	const TriangleUp = styled("div")({
		width: "50vw", // A largura é total da tela
		height: "100px", // Altura do triângulo
		background: "linear-gradient(0deg, #18181B,#232323)",
		clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
		position: "absolute",
		bottom: "0",
		right: "0",
	});

	const handleScroll = () => {
		const targetDiv = document.getElementById("contact");
		if (targetDiv) {
			targetDiv.scrollIntoView({ behavior: "smooth" }); // Scroll suave
		}
	};

	return (
		<>
			<StyledHero>
				<Container maxWidth="lg">
					<Grid container spacing={2}>
						<Grid item xs={12} md={5}>
							<Box position="relative">
								<Box position="absolute" width="120%" top="-100px" right="0">
									<AnimatedBackground />
								</Box>
							</Box>
							<Box position="relative" textAlign="center">
								<StyledAvatar src={Avatar} alt="Avatar" />
							</Box>
						</Grid>
						<Grid item xs={12} md={7}>
							<Typography
								color="primary.contrastText"
								variant="h1"
								textAlign="center"
							>
								Rodrigo Barreto
							</Typography>
							<Typography
								color="primary.contrastText"
								variant="h2"
								textAlign="center"
							>
								<TypingText />
							</Typography>

							<Grid
								container
								display="flex"
								justifyContent="center"
								spacing={3}
								pt={3}
							>
								<Grid
									item
									xs={12}
									md={4}
									display="flex"
									justifyContent="center"
								>
									<StyledButton
										onClick={() => window.open("/Curriculum_Rodrigo_Barreto_2025.pdf", "_blank")}
									>
										<DownloadIcon />
										<Typography>Download CV</Typography>
									</StyledButton>
								</Grid>
								<Grid
									item
									xs={12}
									md={4}
									display="flex"
									justifyContent="center"
								>
									<StyledButton onClick={handleScroll}>
										<EmailIcon />
										<Typography>Contact me</Typography>
									</StyledButton>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</StyledHero>
			<TriangleUp></TriangleUp>
			{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#0099ff"
					fill-opacity="1"
					d="M0,288L1440,128L1440,320L0,320Z"
				></path>
			</svg> */}
		</>
	);
};

export default Hero;
