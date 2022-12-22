import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Project() {
	// const { category, id } = useParams();
	const navigate = useNavigate();
	console.log(navigate, useParams());
	useEffect(() => {
		// if () {
		// 	navigate("/notfound", { replace: true });
		// }
		// category, id, navigate
	}, []);
	return (
		<>
			<section>
				<h1>Project page</h1>
			</section>
		</>
	);
}
