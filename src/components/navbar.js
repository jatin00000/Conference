import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';
import "./style/navbar.css";

function Navbar(props) {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
		props.func();
	};
	return (
		<header className='fixed-top'>
			<h3> </h3>
			<nav ref={navRef} onClick={() => {
				if (window.innerWidth < 1025) {
					showNavbar();
				}
			}}>
				<HashLink to="/#about" className="NAVTEXT nav-link">Home</HashLink>
				<HashLink to="/#theme" className="NAVTEXT  nav-link">Theme</HashLink>
				<HashLink to="/#speaker" className="NAVTEXT  nav-link">Speakers</HashLink>
				<HashLink to="/#submission" className="NAVTEXT  nav-link">Abstracts</HashLink>
				<HashLink to="/#register_comp" className="NAVTEXT  nav-link">Register</HashLink>
				<HashLink to="/#timeline" className="NAVTEXT  nav-link">Timeline</HashLink>
				<HashLink to="/#schedule" className="NAVTEXT  nav-link">Schedule</HashLink>
				<HashLink to="/#reaching" className="NAVTEXT  nav-link">Other details</HashLink>
				<button
					className="nav-btn nav-close-btn"
				>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;