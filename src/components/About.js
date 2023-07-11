import React, { useContext } from "react";
import me from "../img/Me.png";
import hand from "../img/hand.png";
import cv from "../files/Daniel Gauchía Alba.pdf";
import cves from "../files/es Daniel Gauchía Alba.pdf";
import { LanguageContext } from "./LanguageContext";

function About() {
	const { language } = useContext(LanguageContext);
	const renderGreeting = () => {
		if (language === "English") {
			return (
				<>
					<img src={hand} alt='Not found' className='hand' />
					<p className='subtitle'>Hello, I'm</p>
				</>
			);
		} else if (language === "Español") {
			return (
				<>
					<img src={hand} alt='Not found' className='hand' />
					<p className='subtitle'>Hola, soy</p>
				</>
			);
		}
		return null;
	};

	const renderSubtitle = () => {
		if (language === "English") {
			return <p className='subtitle'>A Fullstack Developer</p>;
		} else if (language === "Español") {
			return <p className='subtitle'>Desarrollador Fullstack</p>;
		}
		return null;
	};

	const renderHabilities = () => {
		if (language === "English") {
			return (
				<>
					<p>Hardworking, reliable, organized and motivated employee.</p>
					<p>
						Seeking entry-level opportunities to expand skills while
						facilitating company growth.
					</p>
					<p>
						Highly organized, proactive and punctual with a team-oriented
						mentality.
					</p>
				</>
			);
		} else if (language === "Español") {
			return (
				<>
					<p>Empleado trabajador, confiable, organizado y motivado.</p>
					<p>
						Buscando oportunidades de nivel de entrada para expandir habilidades
						mientras facilito el crecimiento de la empresa.
					</p>
					<p>
						Altamente organizado, proactivo y puntual con una mentalidad
						orientada al trabajo en equipo.
					</p>
				</>
			);
		}
		return null;
	};

	const renderResumeLinkText = () => {
		if (language === "English") {
			return (
				<>
					<a
						href={cv}
						download='Daniel Gauchía Alba.pdf'
						className='resume-link'
					>
						<span>Download Resume</span>
					</a>
				</>
			);
		} else if (language === "Español") {
			return (
				<>
					<a
						href={cves}
						download='Daniel Gauchía Alba.pdf'
						className='resume-link'
					>
						<span>Descargar CV</span>
					</a>
				</>
			);
		}
		return null;
	};

	const renderAboutItemText1 = () => {
		if (language === "English") {
			return (
				<>
					<p className='large-text'>Languages</p>
					<p className='small-text'>Native: Spanish &amp; Catalonian</p>
					<p className='small-text'>B2: English </p>
				</>
			);
		} else if (language === "Español") {
			return (
				<>
					<p className='large-text'>Idiomas</p>
					<p className='small-text'>Nativo: Español &amp; Catalán</p>
					<p className='small-text'>B2: Inglés</p>
				</>
			);
		}
		return null;
	};
	const renderAboutItemText2 = () => {
		if (language === "English") {
			return (
				<>
					<p className='large-text'>10+</p>
					<p className='small-text'>Projects Completed</p>
				</>
			);
		} else if (language === "Español") {
			return (
				<>
					<p className='large-text'>10+</p>
					<p className='small-text'>Proyectos completados</p>
				</>
			);
		}
		return null;
	};
	const renderAboutItemText3 = () => {
		if (language === "English") {
			return (
				<>
					<p className='large-text'>100%</p>
					<p className='small-text'>Motivation to learn and work</p>
				</>
			);
		} else if (language === "Español") {
			return (
				<>
					<p className='large-text'>100%</p>
					<p className='small-text'>Motivación para aprender y trabajar</p>
				</>
			);
		}
		return null;
	};
	const renderAboutItemText4 = () => {
		if (language === "English") {
			return (
				<>
					<p className='large-text'>5+</p>
					<p className='small-text'>Courses Completed</p>
				</>
			);
		} else if (language === "Español") {
			return (
				<>
					<p className='large-text'>5+</p>
					<p className='small-text'>Cursos completados</p>
				</>
			);
		}
		return null;
	};

	return (
		<section id='about'> 
			<div className='container'>
				<img src={me} alt='Not found' className='me' />
				<div className='left-about'>
					<div>
						{renderGreeting()}
						<h1>
							<span className='name'>Daniel Gauchía Alba</span>
						</h1>
						{renderSubtitle()}
						<div className='habilities'>{renderHabilities()}</div>
						<div className='button'>{renderResumeLinkText()}</div>
					</div>
				</div>
				<div className='right-about'>
					<div className='about-item'>
						<div className='abt-text'>{renderAboutItemText1()}</div>
					</div>
					<div className='about-item'>
						<div className='abt-text'>{renderAboutItemText2()}</div>
					</div>
					<div className='about-item'>
						<div className='abt-text'>{renderAboutItemText3()}</div>
					</div>
					<div className='about-item'>
						<div className='abt-text'>{renderAboutItemText4()}</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
