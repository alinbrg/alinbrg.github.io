/* eslint-disable react/jsx-no-target-blank */
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCards, Keyboard } from "swiper";
import { useState } from "react";

export default function Project({ project }) {
	const [isSliderActive, setIsSliderActive] = useState(false);

	return (
		<>
			<div className="project-card ">
				<h2 data-aos="fade-up">{project.name}</h2>
				<div className={isSliderActive ? "images active" : "images "}>
					{project.gallery.length > 0 && (
						<h4
							data-aos="fade-up"
							className="see-more"
							onClick={() => setIsSliderActive(!isSliderActive)}
						>
							{isSliderActive ? "close slider" : "open slider"}
						</h4>
					)}
					<img
						data-aos="zoom-in-up"
						data-aos-duration="1000"
						className="main-img "
						src={project.img}
						alt={project.name}
					/>
					{project.gallery.length > 0 && (
						<>
							<div className="slider" data-aos="fade-up">
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
					<p data-aos="fade-up">
						Github Repo:{" "}
						<a target="_blank" href={project.repo}>
							{project.repo}
						</a>
					</p>
					<p data-aos="fade-up">
						Project Live Link: <a href={project.link}>{project.link}</a>
					</p>
				</div>
				<div className="tags" data-aos="fade-up">
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
