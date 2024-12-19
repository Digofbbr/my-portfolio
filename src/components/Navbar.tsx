import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";

const StyledToolBarr = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-evenly",
});

const handleScroll = (section) => {
	const targetDiv = document.getElementById(section);
	if (targetDiv) {
		targetDiv.scrollIntoView({ behavior: "smooth" });
	}
};

const Navbar = () => {
	return (
		<AppBar position="absolute">
			<StyledToolBarr>
				<MenuItem onClick={() => handleScroll("projects")}>Projects</MenuItem>
				<MenuItem onClick={() => handleScroll("contact")}>Contact</MenuItem>
			</StyledToolBarr>
		</AppBar>
	);
};

export default Navbar;
