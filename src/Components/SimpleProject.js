export default function SimpleProject({ name, live, repo }) {
	return (
		<div className="simple-project-box">
			<h3 className="title">{name}</h3>

			<a className="repo" href={repo} target="_blank" rel="noreferrer">
				&#128447; Repository
			</a>
			<a className="live" href={live}>
				&#128435; Website
			</a>
		</div>
	);
}
