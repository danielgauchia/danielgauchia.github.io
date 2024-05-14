import React from "react";
import js from "../img/javascript.svg";
import css_icon from "../img/css3.svg";
import react_icon from "../img/react.svg";
import html_svg from "../img/html.svg";
import py_svg from "../img/Python.svg";
import java_svg from "../img/java.svg";

function Skills() {

	const skillsIcons = [
		{
			img: html_svg,
			title: "HTML5",
		},
		{
			img: css_icon,
			title: "CSS3",
		},
		{
			img: js,
			title: "Java Script",
		},
		{
			img: react_icon,
			title: "React",
		},
		{
			img: java_svg,
			title: "Java",
		},
		{
			img: py_svg,
			title: "Python",
		},
	];

	return (
		<section id='skills'>
			<div className='container'>
				<div className='content'>
					<div className='logos'>
						<ul>
							{skillsIcons.map((icon) => (
								<li key={icon.title}>
									<img src={icon.img} title={icon.title} alt='skill-icon' />
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
