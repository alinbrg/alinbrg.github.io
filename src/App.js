import { Navigate, Route, Routes } from "react-router-dom";

import "swiper/css";
import "swiper/css/effect-cards";
import "animate.css";

import Home from "./Routes/Home";
import NotFound from "./Routes/NotFound";
import "./App.scss";

function App() {
	return (
		<main className="App">
			<Routes>
				<Route path="/" element={<Home title="Main" />} />
				{/* <Route path="*" element={<NotFound />} /> */}
				<Route path="/404" element={<NotFound title="404" />} />
				<Route path="*" element={<Navigate replace to="/404" />} />
			</Routes>
		</main>
	);
}

export default App;
