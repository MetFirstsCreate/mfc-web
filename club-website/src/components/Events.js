import React from "react";
import { Link } from "react-router-dom";

function Events() {
	return (
		<div>
			{/* Hero Section */}
			<section className="bg-[#F44336] text-white py-24">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-5xl font-bold mb-8">Events</h1>
					<p className="text-xl max-w-3xl mx-auto leading-relaxed">
						Join us at our upcoming robotics events and
						competitions. Experience the excitement of competitive
						robotics firsthand!
					</p>
				</div>
			</section>

			{/* Competition Events */}
			<section className="py-24 bg-white">
				<div className="container mx-auto px-4 max-w-6xl">
					<h2 className="text-4xl font-bold text-center mb-16 text-[#F44336]">
						Competition Events
					</h2>
					<div className="grid md:grid-cols-2 gap-12">
						<div className="bg-gray-50 p-8 rounded-xl">
							<div className="flex items-center mb-6">
								<div className="bg-[#F44336] w-16 h-16 rounded-full flex items-center justify-center mr-6">
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
											d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
								</div>
								<div>
									<h3 className="text-2xl font-semibold">
										Ontario District
									</h3>
									<p className="text-gray-600">
										March 15-17, 2024
									</p>
								</div>
							</div>
							<p className="text-gray-700 mb-6">
								Join us at the Ontario District Event where
								teams from across the region compete in exciting
								robotics matches.
							</p>
							<Link
								to="/contact"
								className="text-[#F44336] font-semibold hover:text-[#D32F2F] transition-colors"
							>
								Learn More →
							</Link>
						</div>
						<div className="bg-gray-50 p-8 rounded-xl">
							<div className="flex items-center mb-6">
								<div className="bg-[#F44336] w-16 h-16 rounded-full flex items-center justify-center mr-6">
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
											d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
								</div>
								<div>
									<h3 className="text-2xl font-semibold">
										Provincial Championship
									</h3>
									<p className="text-gray-600">
										April 5-7, 2024
									</p>
								</div>
							</div>
							<p className="text-gray-700 mb-6">
								The top teams from district events compete for
								the provincial title and a chance to advance to
								the world championship.
							</p>
							<Link
								to="/contact"
								className="text-[#F44336] font-semibold hover:text-[#D32F2F] transition-colors"
							>
								Learn More →
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Practice Field Section */}
			<section className="py-24 bg-gray-50">
				<div className="container mx-auto px-4 max-w-6xl">
					<div className="grid md:grid-cols-2 gap-16 items-center">
						<div>
							<h2 className="text-4xl font-bold mb-8 text-[#F44336]">
								Practice Field
							</h2>
							<p className="text-gray-700 text-lg mb-6">
								Met Firsts Create maintains a dedicated practice
								field for teams to test and refine their robots.
								Our facility features:
							</p>
							<ul className="list-disc list-inside text-gray-700 text-lg space-y-3 mb-8">
								<li>Full-size competition field</li>
								<li>Practice game elements</li>
								<li>Testing equipment</li>
								<li>Technical support</li>
								<li>Collaborative workspace</li>
							</ul>
							<Link
								to="/contact"
								className="inline-block bg-[#F44336] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#D32F2F] transition-colors"
							>
								Schedule Practice Time
							</Link>
						</div>
						<div className="bg-gray-200 h-96 rounded-xl">
							{/* Practice Field Image */}
						</div>
					</div>
				</div>
			</section>

			{/* Workshops Section */}
			<section className="py-24 bg-white">
				<div className="container mx-auto px-4 max-w-6xl">
					<h2 className="text-4xl font-bold text-center mb-16 text-[#F44336]">
						Upcoming Workshops
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
										d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-semibold mb-4">
								Robot Design Workshop
							</h3>
							<p className="text-gray-600 mb-4">
								Learn essential mechanical design principles and
								CAD tools for robotics.
							</p>
							<p className="text-gray-500">March 22, 2024</p>
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
										d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-semibold mb-4">
								Programming Basics
							</h3>
							<p className="text-gray-600 mb-4">
								Introduction to robot programming and control
								systems.
							</p>
							<p className="text-gray-500">March 29, 2024</p>
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
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-semibold mb-4">
								Strategy Session
							</h3>
							<p className="text-gray-600 mb-4">
								Develop effective competition strategies and
								game analysis techniques.
							</p>
							<p className="text-gray-500">April 1, 2024</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Events;
