import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/mfc-logo.png";
import "./Navbar.css";

function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const isActive = (path) => {
		return location.pathname === path;
	};

	return (
		<nav
			className={`fixed w-full z-50 transition-all duration-300 ${
				isScrolled ? "bg-white shadow-lg" : "bg-transparent"
			}`}
		>
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center h-20">
					{/* Logo */}
					<Link to="/" className="flex items-center space-x-3">
						<div className="bg-white p-2 rounded-full">
							<img
								src={logo}
								alt="MFC Logo"
								className="w-8 h-8 object-contain"
							/>
						</div>
						<span
							className={`font-bold text-xl ${
								isScrolled ? "text-gray-900" : "text-white"
							}`}
						>
							MFC
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex space-x-8">
						<Link
							to="/"
							className={`nav-link ${
								isActive("/") ? "active" : ""
							} ${isScrolled ? "text-gray-900" : "text-white"}`}
						>
							Home
						</Link>
						<Link
							to="/about"
							className={`nav-link ${
								isActive("/about") ? "active" : ""
							} ${isScrolled ? "text-gray-900" : "text-white"}`}
						>
							About Us
						</Link>
						<Link
							to="/programs"
							className={`nav-link ${
								isActive("/programs") ? "active" : ""
							} ${isScrolled ? "text-gray-900" : "text-white"}`}
						>
							Programs
						</Link>
						<Link
							to="/events"
							className={`nav-link ${
								isActive("/events") ? "active" : ""
							} ${isScrolled ? "text-gray-900" : "text-white"}`}
						>
							Events
						</Link>
						<Link
							to="/sponsors"
							className={`nav-link ${
								isActive("/sponsors") ? "active" : ""
							} ${isScrolled ? "text-gray-900" : "text-white"}`}
						>
							Sponsors
						</Link>
						<Link
							to="/contact"
							className={`nav-link ${
								isActive("/contact") ? "active" : ""
							} ${isScrolled ? "text-gray-900" : "text-white"}`}
						>
							Contact
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden text-gray-900"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					>
						<svg
							className={`w-6 h-6 ${
								isScrolled ? "text-gray-900" : "text-white"
							}`}
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							{isMobileMenuOpen ? (
								<path d="M6 18L18 6M6 6l12 12" />
							) : (
								<path d="M4 6h16M4 12h16M4 18h16" />
							)}
						</svg>
					</button>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div className="md:hidden bg-white shadow-lg rounded-b-lg">
						<div className="px-4 py-4 space-y-4">
							<Link
								to="/"
								className={`block nav-link ${
									isActive("/") ? "active" : ""
								}`}
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Home
							</Link>
							<Link
								to="/about"
								className={`block nav-link ${
									isActive("/about") ? "active" : ""
								}`}
								onClick={() => setIsMobileMenuOpen(false)}
							>
								About Us
							</Link>
							<Link
								to="/programs"
								className={`block nav-link ${
									isActive("/programs") ? "active" : ""
								}`}
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Programs
							</Link>
							<Link
								to="/events"
								className={`block nav-link ${
									isActive("/events") ? "active" : ""
								}`}
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Events
							</Link>
							<Link
								to="/sponsors"
								className={`block nav-link ${
									isActive("/sponsors") ? "active" : ""
								}`}
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Sponsors
							</Link>
							<Link
								to="/contact"
								className={`block nav-link ${
									isActive("/contact") ? "active" : ""
								}`}
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Contact
							</Link>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
