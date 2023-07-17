import React, { useContext } from "react";
import me from "../img/Me.webp";
import hand from "../img/hand.webp";
import cv from "../files/Daniel Gauchía Alba.pdf";
import cves from "../files/es Daniel Gauchía Alba.pdf";
import { LanguageContext } from "./LanguageContext";

function About() {
	const { language } = useContext(LanguageContext);

	const renderSubtitle = () => {
		if (language === "English") {
			return <>Full-Stack Developer</>;
		} else if (language === "Español") {
			return <>Desarrollador Full-Stack</>;
		}
		return null;
	};

	const renderText = () => {
		if (language === "English") {
			return (
				<p>
					Hello i'm Daniel Gauchía, a hardworking, reliable, organized and
					motivated employee.
				</p>
			);
		} else if (language === "Español") {
			return (
				<>
					<p>
						Hola soy Daniel Gauchía, un empleado trabajador, confiable,
						organizado y motivado.
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

	return (
		<section id='about'>
			<div className='container'>
				<div className='me-container'>
					<img src={me} alt='Not found' className='me' />
				</div>
				<div className='left-about'>
					<div>
						<h1>
							<span className='name'>
								{renderSubtitle()}
								<img src={hand} alt='Not found' className='hand' />
							</span>
						</h1>

						<div className='habilities'>{renderText()}</div>
						<div className='button'>{renderResumeLinkText()}</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
