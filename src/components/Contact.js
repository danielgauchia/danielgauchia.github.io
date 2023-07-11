import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
	const { language } = useContext(LanguageContext);

	const renderLocation = () => {
		if (language === "English") {
			return <h3>Location</h3>;
		} else if (language === "Español") {
			return <h3>Ubicación</h3>;
		}
		return null;
	};

	return (
		<section id='contact' className='section-animation'>
			<div className='contact-content-con'>
				<div className='left-contact'>
					<div className='contact__content'>
						<div className='contact__icons'>
							<div className='contact__icon-box'>
								<span>
									<FontAwesomeIcon
										className='icon'
										icon='fa-solid fa-map-location-dot'
									/>
								</span>
								<div className='contact__info'>
									{renderLocation()}
									<p>Castellón, Spain</p>
								</div>
							</div>

							<div className='contact__icon-box'>
								<span>
									<FontAwesomeIcon
										className='icon'
										icon='fa-solid fa-envelope-open-text'
									/>
								</span>
								<div className='contact__info'>
									<h3>Email</h3>
									<a href='mailto:danielgauchia@gmail.com'>
										danielgauchia@gmail.com
									</a>
								</div>
							</div>

							<div className='contact__icon-box'>
								<span>
									<FontAwesomeIcon
										className='icon'
										icon='fa-brands fa-github'
									/>
								</span>
								<div className='contact__info'>
									<h3>Github</h3>
									<a href='https://github.com/danielgauchia'>danielgauchia</a>
								</div>
							</div>

							<div className='contact__icon-box'>
								<span>
									<FontAwesomeIcon
										className='icon'
										icon='fa-brands fa-linkedin'
									/>
								</span>
								<div className='contact__info'>
									<h3>Linkedin</h3>
									<a href='https://linkedin.com/'>danielgauchia</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Contact;
