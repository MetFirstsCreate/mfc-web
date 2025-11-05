import React from "react";
import { Link } from "react-router-dom";

function Programs() {
	return (
		<div>
			{/* Hero Section */}
			<section className="bg-[#F44336] text-white py-24">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-5xl font-bold mb-8">Our Programs</h1>
					<p className="text-xl max-w-3xl mx-auto leading-relaxed">
						Met Firsts Create offers a variety of programs designed
						to help TMU students develop their engineering and
						robotics skills.
					</p>
				</div>
			</section>

			{/* Ri7D Program */}
			<section className="py-24 bg-white">
				<div className="container mx-auto px-4 max-w-6xl">
					<div className="grid md:grid-cols-2 gap-16 items-center">
						<div>
							<h2 className="text-4xl font-bold mb-8 text-[#F44336]">
								Robot in 7 Days (Ri7D)
							</h2>
							<p className="text-gray-700 text-lg mb-6">
								Our flagship program challenges students to
								design, build, and program a competitive robot
								in just seven days. This intensive experience
								provides hands-on learning in:
							</p>
							<ul className="list-disc list-inside text-gray-700 text-lg space-y-3 mb-8">
								<li>Mechanical Design</li>
								<li>Electrical Systems</li>
								<li>Programming and Control</li>
								<li>Project Management</li>
								<li>Team Collaboration</li>
							</ul>
							<Link
								to="/contact"
								className="inline-block bg-[#F44336] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#D32F2F] transition-colors"
							>
								Join Ri7D
							</Link>
						</div>
						<div className="bg-gray-100 h-96 rounded-xl">
							{/* Ri7D Image */}
						</div>
					</div>
				</div>
			</section>

			{/* Competition Program */}
			<section className="py-24 bg-gray-50">
				<div className="container mx-auto px-4 max-w-6xl">
					<div className="grid md:grid-cols-2 gap-16 items-center">
						<div className="order-2 md:order-1">
							<div className="bg-gray-100 h-96 rounded-xl">
								{/* Competition Image */}
							</div>
						</div>
						<div className="order-1 md:order-2">
							<h2 className="text-4xl font-bold mb-8 text-[#F44336]">
								MFC Competition Team
							</h2>
							<p className="text-gray-700 text-lg mb-6">
								Join our competitive robotics team and represent
								Met Firsts Create in various robotics
								competitions. Team members will:
							</p>
							<ul className="list-disc list-inside text-gray-700 text-lg space-y-3 mb-8">
								<li>Design and build competition robots</li>
								<li>Develop strategic game analysis</li>
								<li>Learn advanced control systems</li>
								<li>Gain competition experience</li>
								<li>Work with industry-standard tools</li>
							</ul>
							<Link
								to="/contact"
								className="inline-block bg-[#F44336] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#D32F2F] transition-colors"
							>
								Join Competition Team
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Training Programs */}
			<section className="py-24 bg-white">
				<div className="container mx-auto px-4 max-w-6xl">
					<h2 className="text-4xl font-bold text-center mb-16 text-[#F44336]">
						Training Programs
					</h2>
					<div className="grid md:grid-cols-3 gap-12">
						<div className="bg-gray-50 p-8 rounded-xl">
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
										d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-semibold mb-4">
								Technical Workshops
							</h3>
							<p className="text-gray-600">
								Regular workshops covering CAD, programming,
								electronics, and mechanical design fundamentals.
							</p>
						</div>
						<div className="bg-gray-50 p-8 rounded-xl">
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
										d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-semibold mb-4">
								Mentorship Program
							</h3>
							<p className="text-gray-600">
								One-on-one guidance from experienced team
								members in your area of interest.
							</p>
						</div>
						<div className="bg-gray-50 p-8 rounded-xl">
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
										d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-semibold mb-4">
								Industry Projects
							</h3>
							<p className="text-gray-600">
								Collaborate on real-world engineering projects
								with industry partners.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Programs;
