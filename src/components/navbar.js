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
			<h3></h3>
			<nav ref={navRef} onClick={() => {if (window.innerWidth< 1025) {
        showNavbar();
      }}}>
        <HashLink to="/#about" className="text-white nav-link">Home</HashLink>
        <HashLink to="/#speaker" className="text-white nav-link">Speakers</HashLink>
        <HashLink to="/#submission" className="text-white nav-link">Submission</HashLink>
        <HashLink to="/#register_comp" className="text-white nav-link">Register</HashLink>
        <HashLink to="/#schedule" className="text-white nav-link">Schedule</HashLink>
        <HashLink to="/#theme" className="text-white nav-link">Theme</HashLink>
        <HashLink to="/#timeline" className="text-white nav-link">Timeline</HashLink>
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