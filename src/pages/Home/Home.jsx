import Navbar from "../../components/Navbar";
import Contact from "./sections/Contact/Contact";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<Projects />
			<Contact />
		</div>
	);
};

export default Home;
