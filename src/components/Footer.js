import React from "react";
function Footer() {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
	return (
		<footer>
			<p>&copy; {currentYear} Daniel Gauchía Alba</p>
		</footer>
	);
}

export default Footer;
