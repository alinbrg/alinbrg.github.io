import { useEffect } from "react";
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
				<h1>404 page</h1>
			</section>
		</>
	);
}
