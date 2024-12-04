import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";

const StyledToolBarr = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-evenly",
});

const handleScroll = () => {
	const targetDiv = document.getElementById("projects");
	if (targetDiv) {
		targetDiv.scrollIntoView({ behavior: "smooth" });
	}
};

const Navbar = () => {
	return (
		<AppBar position="absolute">
			<StyledToolBarr>
				<MenuItem>About</MenuItem>
				<MenuItem onClick={handleScroll}>Projects</MenuItem>
				<MenuItem>Skills</MenuItem>
			</StyledToolBarr>
		</AppBar>
	);
};

export default Navbar;
