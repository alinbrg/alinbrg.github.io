/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useRef, useState } from "react";
import Project from "../Components/Project";
import SimpleProject from "../Components/SimpleProject";
// import data from "../data.json";
import data from "../projectsList.json";
import iconImg from "../imgs/favicon.ico";

export default function Home({ title }) {
	const [projects, setProjects] = useState(data);
	const [projectsList, setProjectsList] = useState(data);

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

	const projectsSectionRef = useRef(null);

	const executeScroll = () => projectsSectionRef.current.scrollIntoView();

	return (
		<>
			<section className="soon">
				<h1>Welcome</h1>
				<div className="see-more" onClick={executeScroll}>
					projects list &#8681;
				</div>
			</section>

			<section id="projects" ref={projectsSectionRef}>
				{projectsList.map((project) => (
					<SimpleProject
						name={project.name}
						live={project.live}
						repo={project.repo}
						key={project.name}
					/>
				))}
			</section>
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
