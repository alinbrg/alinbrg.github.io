/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import Project from "../Components/Project";
import data from "../data.json";
import iconImg from "../imgs/favicon.ico";

export default function Home({ title }) {
	const [projects, setProjects] = useState(data);

	useEffect(() => {
		document.title = title;

		let link = document.querySelector("link[rel~='icon']");
		if (!link) {
			link = document.createElement("link");
			link.rel = "icon";
			document.getElementsByTagName("head")[0].appendChild(link);
		}
		link.href = iconImg;
	}, []);

	return (
		<>
			<div className="soon">
				<h1>Welcome</h1>
			</div>
			{/* <section className="projects-listing">
				{projects.map((project) => (
					<Project project={project} key={project.name} />
				))}
			</section> */}
			<footer>
				<a href="https://github.com/alinbrg/" target="_blank">
					@alinbrg
				</a>
				, 2023
			</footer>
		</>
	);
}
