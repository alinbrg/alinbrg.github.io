import { useEffect } from "react";
import { Link } from "react-router-dom";
import errImg from "../imgs/404.svg";

export default function NotFound({ title }) {
	useEffect(() => {
		document.title = title;

		let link = document.querySelector("link[rel~='icon']");
		if (!link) {
			link = document.createElement("link");
			link.rel = "icon";
			document.getElementsByTagName("head")[0].appendChild(link);
		}
		link.href = errImg;
	}, []);

	return (
		<>
			<section className="not-found-page">
				<h1>The page you're looking for can't be found</h1>
				<Link to={"/"}>OKAY</Link>
			</section>
		</>
	);
}
