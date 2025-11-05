import React from "react";
import { Link } from "react-router-dom";

function About() {
	return (
		<div>
			{/* Hero Section */}
			<section className="bg-[#F44336] text-white py-24">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-5xl font-bold mb-8">About Us</h1>
					<p className="text-xl max-w-3xl mx-auto leading-relaxed">
						Met Firsts Create is a student-led design team at
						Toronto Metropolitan University. Our motto "Anyone Can
						Engineer" drives our mission to make robotics accessible
						to all.
					</p>
				</div>
			</section>

			{/* Mission Section */}
			<section className="py-24 bg-white">
				<div className="container mx-auto px-4 max-w-6xl">
					<div className="grid md:grid-cols-2 gap-16 items-center">
						<div>
							<h2 className="text-4xl font-bold mb-8 text-[#F44336]">
								Our Mission
							</h2>
							<p className="text-gray-700 text-lg mb-6">
								At Met Firsts Create, we strive to foster
								innovation and excellence in robotics
								engineering. Our team is committed to providing
								hands-on experience and mentorship to students
								passionate about technology and engineering.
							</p>
							<p className="text-gray-700 text-lg">
								Through our various programs and initiatives, we
								aim to bridge the gap between academic learning
								and practical application, preparing the next
								generation of engineering leaders.
							</p>
						</div>
						<div className="bg-gray-100 h-96 rounded-xl">
							{/* Mission Image */}
						</div>
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className="py-24 bg-gray-50">
				<div className="container mx-auto px-4 max-w-6xl">
					<h2 className="text-4xl font-bold text-center mb-16 text-[#F44336]">
						Our Core Values
					</h2>
					<div className="grid md:grid-cols-3 gap-12">
						<div className="bg-white p-8 rounded-xl shadow-lg">
							<div className="bg-[#F44336] w-16 h-16 rounded-full flex items-center justify-center mb-6">
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-semibold mb-4">
								Innovation
							</h3>
							<p className="text-gray-600">
								We constantly push the boundaries of what's
								possible in robotics and engineering, fostering
								creativity and forward-thinking solutions.
							</p>
						</div>
						<div className="bg-white p-8 rounded-xl shadow-lg">
							<div className="bg-[#F44336] w-16 h-16 rounded-full flex items-center justify-center mb-6">
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-semibold mb-4">
								Collaboration
							</h3>
							<p className="text-gray-600">
								We believe in the power of teamwork and
								knowledge sharing, creating an environment where
								everyone can learn and grow together.
							</p>
						</div>
						<div className="bg-white p-8 rounded-xl shadow-lg">
							<div className="bg-[#F44336] w-16 h-16 rounded-full flex items-center justify-center mb-6">
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-semibold mb-4">
								Excellence
							</h3>
							<p className="text-gray-600">
								We strive for excellence in everything we do,
								maintaining high standards in our projects,
								competitions, and educational initiatives.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="py-24 bg-white">
				<div className="container mx-auto px-4 max-w-6xl">
					<h2 className="text-4xl font-bold text-center mb-16 text-[#F44336]">
						Our Team
					</h2>
					<div className="grid md:grid-cols-2 gap-16">
						<div>
							<h3 className="text-2xl font-semibold mb-6">
								Student-Led Excellence
							</h3>
							<p className="text-gray-700 text-lg mb-6">
								Met Firsts Create is proud to be entirely
								student-led, bringing together passionate
								individuals from various engineering disciplines
								at Toronto Metropolitan University.
							</p>
							<p className="text-gray-700 text-lg">
								Our team members gain invaluable experience in
								project management, technical design, and
								leadership while working on cutting-edge
								robotics projects.
							</p>
						</div>
						<div className="bg-gray-100 h-80 rounded-xl">
							{/* Team Image */}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default About;
