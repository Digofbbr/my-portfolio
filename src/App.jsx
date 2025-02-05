import Home from "./pages/Home/Home";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const App = () => {

	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true
		});  // Inicializando o AOS quando o componente for montado
	}, []);

	return (
		<>
			<Home />
		</>
	);
};

export default App;
