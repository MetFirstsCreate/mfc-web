import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Programs from "./components/Programs";
import Events from "./components/Events";
import Sponsors from "./components/Sponsors";
import Contact from "./components/Contact";

function App() {
	return (
		<Router>
			<div className="min-h-screen bg-gray-50 flex flex-col">
				<Navbar />
				<main className="flex-grow">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/programs" element={<Programs />} />
						<Route path="/events" element={<Events />} />
						<Route path="/sponsors" element={<Sponsors />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
