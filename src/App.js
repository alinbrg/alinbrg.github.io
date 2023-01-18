import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import "swiper/css";
import "swiper/css/effect-cards";

import Home from "./Routes/Home";
import NotFound from "./Routes/NotFound";
import "./App.scss";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
	const location = useLocation();

	return (
		<main className="App">
			<Routes>
				<Route path="/" element={<Home title="Main" />} />
				{/* <Route path="*" element={<NotFound />} /> */}
				<Route
					path="*"
					element={<NotFound title={location.pathname.substring(1)} />}
				/>
				{/* <Route path="*" element={<Navigate replace to="/404" />} /> */}
			</Routes>
		</main>
	);
}

export default App;
