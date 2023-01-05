/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import Project from "../Components/Project";
import data from "../data.json";
export default function Home({ title }) {
	const [projects, setProjects] = useState(data);

	useEffect(() => {
		document.title = title;
	}, []);

	return (
		<>
			<div className="soon">
				<h1>Coming soon</h1>
			</div>
			<section className="projects-listing">
				{projects.map((project) => (
					<Project project={project} key={project.name} />
				))}
			</section>
			<footer>
				<a href="https://github.com/alinbrg/" target="_blank">
					@alinbrg
				</a>
				, 2023
			</footer>
		</>
	);
}
