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
					
				</>
			);
		} else if (language === "Español") {
			return (
				<>
					<p>Empleado trabajador, confiable, organizado y motivado.</p>
					
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
						{renderGreeting()}
						<h1>
							<span className='name'>Daniel Gauchía</span>
						</h1>
						{renderSubtitle()}
						<div className='habilities'>{renderHabilities()}</div>
						<div className='button'>{renderResumeLinkText()}</div>
					</div>
				</div>
				
			</div>
		</section>
	);
}

export default About;
