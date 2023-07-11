import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LanguageContext } from "./LanguageContext";

function Timeline() {
	const { language } = useContext(LanguageContext);
	const timelineData = [
		{
			id: "milestone1",
			year: "2016 - 2018",
			title: language === "English" ? "High school" : "Bachillerato",
			subtitle: "IES Ribalta",
			description:
				language === "English"
					? "I completed high school at IES Ribalta."
					: "Terminé el bachillerato en el IES Ribalta.",
		},
		{
			id: "milestone2",
			year: language === "English" ? "2018 - PRESENT" : "2018 - PRESENTE",
			title:
				language === "English" ? "Computer Science" : "Ingeniería Informática",
			subtitle: "Universitat Jaume I",
			description:
				language === "English"
					? "Studying Computer Science at UJI."
					: "Estudiando Ingeniería Informática en la Universitat Jaume I.",
		},
	];
	return (
		<section id='timeline' className='section-animation'>
			<div className='container'>
				<div className='left-about'>
					<div className='timeline'>
						{timelineData.map((item) => (
							<div className='timeline-item' key={item.id}>
								<div className='timeline-icon'>
									<FontAwesomeIcon
										className='icon'
										icon='fa-solid fa-briefcase'
									/>
								</div>
								<div className='timeline-content'>
									<div className='timeline-year'>
										<span className='year'>{item.year}</span>
									</div>
									<div className='timeline-title'>
										<h4>{item.title}</h4>
										<h3>{item.subtitle}</h3>
									</div>
									<div className='timeline-description'>
										<p>{item.description}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Timeline;
