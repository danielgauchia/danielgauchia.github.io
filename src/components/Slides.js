import React, {  useState } from "react";

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

	return (
		<div className='container'>
			<div className='carousel'>
				<div className='slides'>
					<div className='previousslide'>
						<img
							src={
								slides[(currentIndex - 1 + slides.length) % slides.length].image
							}
							alt={`Previous Screenshot`}
							style={{maxWidth: '100%'}}
							onClick={goToPreviousSlide}
						/>
					</div>
					<div className='currentslide'>
						<img
							src={slides[currentIndex].image}
							alt={`Current Screenshot`}
							style={{maxWidth: '100%'}}
						/>
					</div>
					<div className='nextslide'>
						<img
							src={slides[(currentIndex + 1) % slides.length].image}
							alt={`Next Screenshot`}
							style={{maxWidth: '100%'}}
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
			</div>
		</div>
	);
}

export default Slides;
