import React from "react";
import {useNavigate} from "react-router-dom";

function Footer() {
    const navigate = useNavigate();
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <footer>
            <p onClick={() => {
                navigate("/portfolio");
            }}>&copy; {currentYear} Daniel Gauchía Alba</p>
        </footer>
    );
}

export default Footer;