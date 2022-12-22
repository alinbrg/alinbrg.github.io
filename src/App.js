import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./Routes/Home";
import NotFound from "./Routes/NotFound";
import Project from "./Routes/Project";

function App() {
	return (
		<main className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<NotFound />} />
				{/* <Route path="/404" element={<NotFound />} />
				<Route path="*" element={<Navigate replace to="/404" />} /> */}
			</Routes>
		</main>
	);
}

export default App;
