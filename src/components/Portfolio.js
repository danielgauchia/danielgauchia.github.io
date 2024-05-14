import React, { useContext, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import sl_app from "../img/slapp3.webp";
import portf from "../img/portfolio.webp";
import planif from "../img/planificadorgastos.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Portfolio() {
	const { language } = useContext(LanguageContext);
	const [currentIndex, setCurrentIndex] = useState(1);


	const slides = [
		{
			id: "slide1",
			image: sl_app,
			link: "",
			live: "",
			subtext_es:
				"Streetlifting Companion es una aplicación Android que tiene una amplia gama de funcionalidades, que incluyen gestión de ejercicios, cálculo de RM, calculadora de tabla RIR, gamificación y utilidades adicionales, tiene como objetivo simplificar y mejorar la experiencia de entrar streetlifting. Al utilizar esta aplicación, los streetlifters pueden optimizar sus entrenamientos, realizar un seguimiento de su progreso y alcanzar sus objetivos de acondicionamiento físico de manera más eficiente y efectiva.",
			subtext_en:
				"Streetlifting Companion is and Android app which has an extensive range of functionalities, including exercise management, RM calculation, RIR table calculator, gamification , and additional utilities, aims to simplify and enhance the streetlifting training experience. By utilizing this app, streetlifters can optimize their workouts, track their progress, and achieve their fitness goals more efficiently and effectively.",
		},
		{
			id: "slide2",
			image: portf,
			link: "https://github.com/danielgauchia/danielgauchia.github.io/tree/master",
			live: "",
			subtext_en:
				"This project signifies a significant milestone in my career as a web developer, as it is my first React app, showcasing my ability to create scalable and responsive applications.",
			subtext_es:
				"Este proyecto significa un hito importante en mi carrera como desarrollador web, ya que es mi primera aplicación React, que muestra mi capacidad para crear aplicaciones escalables y de diseño responsive.",
		},
		{
			id: "slide3",
			image: planif,
			link: "https://github.com/danielgauchia/planificador",
			live: "",
			subtext_en:
				"Budget Handler is a user-friendly and efficient mobile application developed using React Native. It serves as a comprehensive monthly budget handler, allowing users to effortlessly track their expenses. Whether you want to keep an eye on your spending habits, allocate funds to various categories, or analyze your expenditure by date or category, Budget Handler has got you covered.",
			subtext_es:
				"Budget Handler es una aplicación móvil fácil de usar y eficiente desarrollada con React Native. Sirve como un controlador de presupuesto mensual integral, lo que permite a los usuarios realizar un seguimiento de sus gastos sin esfuerzo. Ya sea que desee controlar sus hábitos de gasto, asignar fondos a varias categorías o analizar sus gastos por fecha o categoría, Budget Handler lo tiene cubierto.",
		},
	];


	const goToPreviousSlide = () => {
		let newIndex = currentIndex - 1;
		if (newIndex < 0) {
			newIndex = slides.length - 1;
		}
		setCurrentIndex(newIndex);
	};

	const goToNextSlide = () => {
		let newIndex = currentIndex + 1;
		if (newIndex >= slides.length) {
			newIndex = 0;
		}
		setCurrentIndex(newIndex);
	};



	const getSubtext = () => {
		if (language === "English") {
			return <div className='subtext'>{slides[currentIndex].subtext_en}</div>;
		} else if (language === "Español") {
			return <div className='subtext'>{slides[currentIndex].subtext_es}</div>;
		}
		return "";
	};

	const github = () => {
		if (slides[currentIndex].link !== "") {
			if (language === "English") {
				return (
					<>
						<span>
							<FontAwesomeIcon className='icon' icon='fa-brands fa-github' />
						</span>
						<div className='info'>
							<h3>Github</h3>
							<a href={slides[currentIndex].link}>Source Code </a>
						</div>
					</>
				);
			} else if (language === "Español") {
				return (
					<>
						<span>
							<FontAwesomeIcon className='icon' icon='fa-brands fa-github' />
						</span>
						<div className='info'>
							<h3>Github</h3>
							<a href={slides[currentIndex].link}>Código Fuente </a>
						</div>
					</>
				);
			}
		} else {
			return "";
		}
	};

	const live = () => {
		if (slides[currentIndex].live !== "") {
			if (language === "English") {
				return (
					<>
						<span>
							<FontAwesomeIcon className='icon' icon='fas fa-rocket' />
						</span>
						<div className='info'>
							<h3>Live</h3>
							<a href={slides[currentIndex].live}>See Live</a>
						</div>
					</>
				);
			} else if (language === "Español") {
				return (
					<>
						<span>
							<FontAwesomeIcon className='icon' icon='fas fa-rocket' />
						</span>
						<div className='info'>
							<h3>Ejemplo</h3>
							<a href={slides[currentIndex].live}>Ver Ejemplo</a>
						</div>
					</>
				);
			}
		} else {
			return "";
		}
	};

	return (
		<section id='portfolio' className='section-animation'>
			<div className='container'>
				<div className='content'>
					
					<div className='carousel'>
					
						<div className='slides'>
							<div className='previousslide'>
								<img
									src={
										slides[(currentIndex - 1 + slides.length) % slides.length]
											.image
									}
									alt={`Previous Screenshot`}
									style={{ maxWidth: "100%" }}
									onClick={goToPreviousSlide}
								/>
							</div>
							<div className='currentslide'>
								<img
									src={slides[currentIndex].image}
									alt={`Current Screenshot`}
									style={{ maxWidth: "100%" }}
								/>
							</div>
							<div className='nextslide'>
								<img
									src={slides[(currentIndex + 1) % slides.length].image}
									alt={`Next Screenshot`}
									style={{ maxWidth: "100%" }}
									onClick={goToNextSlide}
								/>
							</div>
						</div>
						<div className='carousel-dots'>
							{slides.map((dotSlide) => (
								<div
									key={dotSlide.id}
									className={`carousel-dot ${
										dotSlide.id === slides[currentIndex].id ? "active" : ""
									}`}
									onClick={() =>
										setCurrentIndex(
											slides.findIndex((slide) => slide.id === dotSlide.id)
										)
									}
								></div>
							))}
						</div>
						<div className='carousel-subtext'>
							{getSubtext()}
							<div className='icon-box'>
								{github()}
								{live()}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
