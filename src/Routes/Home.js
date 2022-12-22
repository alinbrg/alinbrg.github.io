import { useEffect } from "react";

export default function Home({ title }) {
	useEffect(() => {
		document.title = title;
	}, []);
	return (
		<>
			<section>
				<h1>Coming Soon</h1>
			</section>
		</>
	);
}
