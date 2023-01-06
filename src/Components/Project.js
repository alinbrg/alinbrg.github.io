/* eslint-disable react/jsx-no-target-blank */
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCards, Keyboard } from "swiper";
import { useState } from "react";

export default function Project({ project }) {
	const [isSliderActive, setIsSliderActive] = useState(false);

	return (
		<>
			<div className="project-card ">
				<h2>{project.name}</h2>
				<div className={isSliderActive ? "images active" : "images "}>
					{project.gallery.length > 0 && (
						<h4
							className="see-more"
							onClick={() => setIsSliderActive(!isSliderActive)}
						>
							{isSliderActive ? "close slider" : "open slider"}
						</h4>
					)}
					<img className="main-img " src={project.img} alt={project.name} />
					{project.gallery.length > 0 && (
						<>
							<div className="slider">
								<Swiper
									effect={"cards"}
									grabCursor={true}
									modules={[EffectCards, Keyboard]}
									className="gallery-swiper"
									keyboard={{
										enabled: true,
									}}
								>
									{project.gallery.map((img) => {
										return (
											<SwiperSlide key={img}>
												<img src={img} alt={project.name} />
											</SwiperSlide>
										);
									})}
								</Swiper>
							</div>
						</>
					)}
				</div>
				<div className="links">
					<p>
						Github Repo:{" "}
						<a target="_blank" href={project.repo}>
							{project.repo}
						</a>
					</p>
					<p>
						Project Live Link: <a href={project.link}>{project.link}</a>
					</p>
				</div>
				<div className="tags">
					<ul>
						{project.tags.map((tag) => {
							return <li key={tag}>{tag}</li>;
						})}
					</ul>
				</div>
			</div>
		</>
	);
}
