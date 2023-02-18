export default function SimpleProject({ name, live, repo }) {
	return (
		<div className="simple-project-box">
			<h3 className="title">{name}</h3>

			<a className="repo" href={repo} target="_blank" rel="noreferrer">
				🖿 Repository
			</a>
			<a className="live" href={live}>
				🖳 Website
			</a>
		</div>
	);
}
