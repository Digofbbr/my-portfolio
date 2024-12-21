import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, styled, Snackbar, Alert } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contact = () => {
	const [open, setOpen] = useState(false);

	const StyledContact = styled("div")({
		backgroundColor: "black",
		padding: "50px 0px",
	});

	const Form = styled("form")({
		display: "flex",
		flexDirection: "column",
		gap: "20px",
	});

	const FormInput = styled("input")({
		padding: "20px",
		backgroundColor: "transparent",
		border: "1px solid white",
		color: "white",
		borderRadius: "5px",
	});

	const FormTextarea = styled("textarea")({
		padding: "20px",
		backgroundColor: "transparent",
		border: "1px solid white",
		color: "white",
		borderRadius: "5px",
		resize: "vertical",
	});

	const SubmitEmailButton = styled("button")({
		padding: "20px",
		border: "none",
		backgroundColor: "orange",
		cursor: "pointer",
		fontWeight: 500,
		borderRadius: "10px",
	});

	// Define os estilos compartilhados
	const StyledIcon = styled("a")(({ theme }) => ({
		color: "white",
		transition: "all 0.3s ease",
		"&:hover": {
			color: theme.palette.secondary.main,
			scale: "1.5",
		},
	}));

	const SocialMediaWrapper = styled("div")(({ theme }) => ({
		display: "flex",
		gap: "20px",
		flexWrap: "wrap",
		alignItems: "center",
		width: "25%",
		textAlign: "center",
		justifyContent: "center",

		[theme.breakpoints.down("sm")]: {
			width: "100%",

			h3: {
				marginBottom: "10px",
				marginTop: "48px",
			},
		},
	}));

	const ContactWrapper = styled("div")(({ theme }) => ({
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",

		".formContainer": {
			width: "40%",
			maxWidth: "460px",

			[theme.breakpoints.down("sm")]: {
				width: "100%",
			},
		},

		[theme.breakpoints.down("sm")]: {
			flexDirection: "column-reverse",
		},
	}));

	const formRef = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_5wjo13f", "template_gxsapah", formRef.current, {
				publicKey: "u07x8d4fsnsJF1FgX",
			})
			.then(
				() => {
					formRef.current.reset();
					console.log("SUCCESS!");
					setOpen(true);
				},
				(error) => {
					console.log("FAILED...", error.text);
					alert("Error sending email");
				}
			);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	return (
		<StyledContact id="contact">
			<Container>
				<ContactWrapper>
					<SocialMediaWrapper>
						<h3
							style={{
								letterSpacing: "3px",
								color: "white",
								fontSize: "24px",
								flex: "1 1 100%",
							}}
						>
							Social Media
						</h3>
						<StyledIcon
							href="https://github.com/Digofbbr"
							rel="noopener"
							target="_blank"
						>
							<GitHubIcon sx={{ fontSize: 35 }} />
						</StyledIcon>
						<StyledIcon
							href="https://www.linkedin.com/in/rodrigo-barreto-23438a88/"
							rel="noopener"
							target="_blank"
						>
							<LinkedInIcon sx={{ fontSize: 35 }} />
						</StyledIcon>
						<StyledIcon
							href="https://www.instagram.com/r.barreto6/"
							rel="noopener"
							target="_blank"
						>
							<InstagramIcon sx={{ fontSize: 35 }} />
						</StyledIcon>
					</SocialMediaWrapper>

					<div className="formContainer">
						<Form ref={formRef} onSubmit={sendEmail}>
							<FormInput type="text" required placeholder="Name" name="name" />
							<FormInput
								type="email"
								required
								placeholder="Email"
								name="email"
							/>
							<FormTextarea rows={6} placeholder="Message" name="message" />
							<SubmitEmailButton>Submit</SubmitEmailButton>
						</Form>
					</div>
				</ContactWrapper>
				<Snackbar open={open} autoHideDuration={30000} onClose={handleClose}>
					<Alert
						onClose={handleClose}
						severity="success"
						variant="filled"
						sx={{
							width: "100%",
							backgroundColor: "#4f8e3e",
						}}
					>
						Email sent!
					</Alert>
				</Snackbar>
			</Container>
		</StyledContact>
	);
};

export default Contact;
