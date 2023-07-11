import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faFontAwesome,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Navigation from "./components/Navigation";
import Home from "./pages/Home";

library.add(fas, faGithub, faFontAwesome, faLinkedin);
function showElementAnimation() {
	let elements = Array.from(
		document.getElementsByClassName("section-animation")
	);
	if (!elements) return;

	let showTiming = window.innerHeight > 768 ? 200 : 40;
	let scrollY = window.scrollY;
	let windowH = window.innerHeight;

	for (let element of elements) {
		let elemClientRect = element.getBoundingClientRect();
		let elemY = scrollY + elemClientRect.top;
		if (scrollY + windowH - showTiming > elemY) {
			element.classList.add("is-shown");
		} else if (scrollY + windowH < elemY) {
			element.classList.remove("is-shown");
		}
	}
}

showElementAnimation();
window.addEventListener("scroll", showElementAnimation);

function App() {
	return (
		<>
			<Navigation />
			<Home />
		</>
	);
}

export default App;
