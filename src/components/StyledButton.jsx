import { styled } from "@mui/material";

const StyledButton = ({ onClick, children }) => {
	const StyledButtonCode = styled("button")(({ theme }) => ({
		backgroundColor: "transparent",
		border: `1px solid ${theme.palette.primary.contrastText}`,
		borderRadius: "5px",
		width: "100%",
		padding: "5px 15px",
		color: theme.palette.primary.contrastText,
		transition: "all 0.3s ease",
		cursor: "pointer",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		gap: "10px",
		"&:hover": {
			backgroundColor: theme.palette.secondary.light,
		},
		[theme.breakpoints.down("md")]: {
			padding: "10px 15px",
			maxWidth: "80%",
		},
	}));

	return <StyledButtonCode onClick={onClick}>{children}</StyledButtonCode>;
};

export default StyledButton;
