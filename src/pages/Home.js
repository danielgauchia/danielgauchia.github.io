import React from "react";

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";
import Timeline from "../components/Timeline";

function Home() {
	return (
		<>
			<Navigation />
			<About />
			<Skills />
			<Timeline />
			<Portfolio />
			<Contact />
			<Footer />
		</>
	);
}

export default Home;
