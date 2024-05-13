import React, { useEffect, useState } from "react";

import sl_app1 from "../img/slapp1.webp";
import sl_app2 from "../img/slapp2.webp";
import sl_app3 from "../img/slapp3.webp";

function Slides() {
	const [currentIndex, setCurrentIndex] = useState(1);

	const slides = [
		{
			id: "slide1",
			image: sl_app2,
		},
		{
			id: "slide2",
			image: sl_app1,
		},
		{
			id: "slide3",
			image: sl_app3,
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

	return (
		<div className='container'>
			<div className='content'>
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
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Slides;
