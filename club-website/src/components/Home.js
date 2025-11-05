import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/mfc-logo.png";

function Home() {
	return (
		<div>
			{/* Hero Section */}
			<section className="relative h-screen flex items-center justify-center bg-gray-900 text-white">
				<div className="absolute inset-0 overflow-hidden">
					{/* Add a dark overlay */}
					<div className="absolute inset-0 bg-black opacity-60"></div>

					{/* Background pattern or image could go here */}
					<div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-transparent opacity-90"></div>
				</div>

				<div className="relative container mx-auto px-4 text-center">
					<div className="flex justify-center mb-8">
						<img src={logo} alt="MFC Logo" className="w-32 h-32" />
					</div>
					<h1 className="text-6xl font-bold mb-6">
						Welcome to Met Firsts Create
					</h1>
					<p className="text-xl mb-12 max-w-3xl mx-auto">
						Anyone Can Engineer - Join us in pushing the boundaries
						of robotics and innovation at Toronto Metropolitan
						University.
					</p>
					<div className="flex justify-center space-x-6">
						<Link
							to="/about"
							className="bg-[#F44336] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#D32F2F] transition-colors"
						>
							Learn More
						</Link>
						<Link
							to="/contact"
							className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
						>
							Get Involved
						</Link>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-24 bg-gray-900">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-16 text-white">
						Why Choose Met Firsts Create?
					</h2>
					<div className="grid md:grid-cols-3 gap-12">
						{/* Innovation */}
						<div className="text-center">
							<div className="bg-[#F44336] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
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
							<h3 className="text-2xl font-semibold mb-4 text-white">
								Innovation
							</h3>
							<p className="text-gray-300">
								Experience cutting-edge robotics and engineering
								projects that push the boundaries of what's
								possible.
							</p>
						</div>

						{/* Community */}
						<div className="text-center">
							<div className="bg-[#F44336] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
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
							<h3 className="text-2xl font-semibold mb-4 text-white">
								Community
							</h3>
							<p className="text-gray-300">
								Join a vibrant community of like-minded
								individuals passionate about technology and
								engineering.
							</p>
						</div>

						{/* Learning */}
						<div className="text-center">
							<div className="bg-[#F44336] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
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
							<h3 className="text-2xl font-semibold mb-4 text-white">
								Learning
							</h3>
							<p className="text-gray-300">
								Gain hands-on experience and develop valuable
								skills through our comprehensive training
								programs.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Home;
