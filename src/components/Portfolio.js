import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import sl_app from "../img/slapp.webp";
import portf from "../img/portfolio.webp";
import planif from "../img/planificadorgastos.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Portfolio() {
	const { language } = useContext(LanguageContext);
	const [currentIndex, setCurrentIndex] = useState(1);

	const renderTitle = () => {
		if (language === "English") {
			return <h1>Projects</h1>;
		} else if (language === "Español") {
			return <h1>Proyectos</h1>;
		}
		return null;
	};

	const slides = [
		{
			id: "slide1",
			image: sl_app,
			link: "",
			live: "",
			subtext_en:
				"The StreetLifter Training Companion is an Android app developed in Java using Android Studio. Its extensive range of functionalities, including exercise management, RM calculation, weight plate calculator, exercise videos, and additional utilities, aims to simplify and enhance the streetlifting training experience. By utilizing this app, streetlifters can optimize their workouts, track their progress, and achieve their fitness goals more efficiently and effectively.",
			subtext_es:
				"StreetLifter Training Companion es una aplicación de Android desarrollada en Java usando Android Studio. Su amplia gama de funcionalidades, que incluyen gestión de ejercicios, cálculo de RM, calculadora de discos de peso, videos de ejercicios y utilidades adicionales, tiene como objetivo simplificar y mejorar la experiencia de entrenamiento de streetlifting. Al utilizar esta aplicación, los streetlifters pueden optimizar sus entrenamientos, realizar un seguimiento de su progreso y lograr sus objetivos de acondicionamiento físico de manera más eficiente y efectiva.",
		},
		{
			id: "slide2",
			image: portf,
			link: "https://github.com/danielgauchia/danielgauchia.github.io/tree/master",
			live: "https://danielgauchia.github.io/",
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

	const showSlide = (slideId) => {
		const carouselSlides = document.getElementsByClassName("carousel-slide");
		Array.from(carouselSlides).forEach((slide) => {
			slide.style.display =
				slide.getAttribute("data-slide-id") === slideId ? "block" : "none";
		});
	};

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

	useEffect(() => {
		showSlide(slides[currentIndex].id);
	});

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
					{renderTitle()}
					<div className='carousel'>
						{slides.map((slide, index) => (
							<div
								className='carousel-slide'
								key={slide.id}
								data-slide-id={slide.id}
								style={{ display: index === currentIndex ? "block" : "none" }}
							>
								<div className='slides'>
									<img
										src={
											slides[(currentIndex - 1 + slides.length) % slides.length]
												.image
										}
										alt={`Previous Project`}
										className='blurred-previous'
										onClick={goToPreviousSlide}
									/>
									<img
										src={slide.image}
										alt={`Current Project ${slide.id}`}
										className='center'
									/>
									<img
										src={slides[(currentIndex + 1) % slides.length].image}
										alt={`Next Project`}
										className='blurred-next'
										onClick={goToNextSlide}
									/>
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
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
