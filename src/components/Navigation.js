import React, { useContext, useState, useEffect } from "react";
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
	Flex,
	Image,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { LanguageContext } from "./LanguageContext";
import es from "../img/es.svg";
import en from "../img/gb.svg";

const dropdownOptions = [
	{ id: 1, label: "English", icon: en },
	{ id: 2, label: "Español", icon: es },
];

function Dropdown() {
	const { language, changeLanguage } = useContext(LanguageContext);

	const handleLanguageChange = (selectedLanguage) => {
		changeLanguage(selectedLanguage);
	};

	return (
		<div className='language'>
			<Menu>
				<MenuButton
					as={Button}
					rightIcon={<ChevronDownIcon />}
					borderRadius='md'
					px={4}
					py={2}
					color='black'
				>
					<Flex align='center'>
						<Image
							src={
								dropdownOptions.find((option) => option.label === language)
									?.icon
							}
							boxSize='15px'
							mr={2}
						/>
						{language}
					</Flex>
				</MenuButton>
				<MenuList>
					{dropdownOptions.map((item) => (
						<MenuItem
							key={item.id}
							onClick={() => handleLanguageChange(item.label)}
							color='black'
						>
							<Flex align='center'>
								<Image src={item.icon} boxSize='15px' mr={2} />
								{item.label}
							</Flex>
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		</div>
	);
}

function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 950);
	const [isChecked, setIsChecked] = useState(false); // Add isChecked state

	function toggleMenu() {
		setIsMenuOpen(!isMenuOpen);
	}

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 950);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	const { language } = useContext(LanguageContext);
	const renderLinks = () => {
		const showMenu = isMobile && isMenuOpen;

		const navStyle = {
			height: showMenu ? "100%" : "25px",
		};

		const ulStyle = {
			opacity: isMobile ? (isMenuOpen ? "1" : "0") : "1",
			flexDirection: showMenu ? "column" : "row",
			transition: showMenu ? "opacity .3s ease-in-out" : "none",
		};

		const handleLinkClick = (sectionId) => {
			if (isMobile) {
				toggleMenu();
				setIsChecked(false);
			}
			scrollToSection(sectionId);
		};
		const scrollToSection = (sectionId) => {
			const section = document.getElementById(sectionId);
			if (sectionId === 'about') {
				window.scrollTo({ top: window.top, behavior: "smooth" });
			}
			else if (section) {
				const offset = section.offsetTop - 60;
				window.scrollTo({ top: offset, behavior: "smooth" });
			}
			
		};
		if (language === "English") {
			return (
				<nav style={navStyle}>
					<h3 className='logo'>Gauchia.dev</h3>
					<div className='switch'>
						<input
							type='checkbox'
							checked={isChecked}
							onClick={() => toggleMenu()}
							onChange={() => setIsChecked(!isChecked)}
						/>
						<div>
							<span className='line-1'></span>
							<span className='line-2'></span>
							<span className='line-3'></span>
						</div>
					</div>

					<ul style={ulStyle}>
						<li>
							<h4 onClick={() => handleLinkClick("about")}>Home</h4>
						</li>
						<li>
							<h4 onClick={() => handleLinkClick("timeline")}>Timeline</h4>
						</li>
						<li>
							<h4 onClick={() => handleLinkClick("portfolio")}>Projects</h4>
						</li>

						<li>
							<h4 onClick={() => handleLinkClick("contact")}>Contact</h4>
						</li>
						<Dropdown />
					</ul>
				</nav>
			);
		} else if (language === "Español") {
			return (
				<nav style={navStyle}>
					<h3 className='logo'>Gauchia.dev</h3>

					<div className='switch'>
						<input
							type='checkbox'
							checked={isChecked}
							onClick={() => toggleMenu()}
							onChange={() => setIsChecked(!isChecked)}
						/>
						<div>
							<span className='line-1'></span>
							<span className='line-2'></span>
							<span className='line-3'></span>
						</div>
					</div>
					<ul style={ulStyle}>
						<li>
							<h4 onClick={() => handleLinkClick("about")}>Índice</h4>
						</li>
						<li>
							<h4 onClick={() => handleLinkClick("timeline")}>Linea Temporal</h4>
						</li>
						<li>
							<h4 onClick={() => handleLinkClick("portfolio")}>Proyectos</h4>
						</li>

						<li>
							<h4 onClick={() => handleLinkClick("contact")}>Contacto</h4>
						</li>
						<Dropdown />
					</ul>
				</nav>
			);
		}
		return null;
	};

	return (
		<>
			<header>{renderLinks()}</header>
		</>
	);
}

export default Navigation;
