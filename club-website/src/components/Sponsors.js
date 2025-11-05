import React from "react";
import { Link } from "react-router-dom";

function Sponsors() {
	return (
		<div>
			{/* Hero Section */}
			<section className="bg-[#F44336] text-white py-24">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-5xl font-bold mb-8">Sponsors</h1>
					<p className="text-xl max-w-3xl mx-auto leading-relaxed">
						Support the next generation of robotics engineers and
						innovators. Partner with Met Firsts Create to make a
						lasting impact.
					</p>
				</div>
			</section>

			{/* Why Sponsor Section */}
			<section className="py-24 bg-white">
				<div className="container mx-auto px-4 max-w-6xl">
					<div className="grid md:grid-cols-2 gap-16 items-center">
						<div>
							<h2 className="text-4xl font-bold mb-8 text-[#F44336]">
								Why Sponsor Us?
							</h2>
							<p className="text-gray-700 text-lg mb-6">
								By sponsoring Met Firsts Create, you're
								investing in the next generation of engineers
								and innovators. Your support helps us:
							</p>
							<ul className="list-disc list-inside text-gray-700 text-lg space-y-3 mb-8">
								<li>Provide hands-on engineering experience</li>
								<li>
									Develop cutting-edge robotics technology
								</li>
								<li>Participate in competitive events</li>
								<li>Maintain state-of-the-art facilities</li>
								<li>Support student learning and growth</li>
							</ul>
							<Link
								to="/contact"
								className="inline-block bg-[#F44336] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#D32F2F] transition-colors"
							>
								Become a Sponsor
							</Link>
						</div>
						<div className="bg-gray-100 h-96 rounded-xl">
							{/* Sponsor Image */}
						</div>
					</div>
				</div>
			</section>

			{/* Sponsorship Packages */}
			<section className="py-24 bg-gray-50">
				<div className="container mx-auto px-4 max-w-6xl">
					<h2 className="text-4xl font-bold text-center mb-16 text-[#F44336]">
						Sponsorship Packages
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
										d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-semibold mb-4">
								Bronze
							</h3>
							<p className="text-gray-600 mb-6">
								Perfect for small businesses looking to support
								innovation
							</p>
							<ul className="list-disc list-inside text-gray-600 space-y-3 mb-8">
								<li>Logo on team website</li>
								<li>Social media recognition</li>
								<li>Team newsletter updates</li>
								<li>Certificate of appreciation</li>
							</ul>
							<p className="text-2xl font-bold text-[#F44336] mb-6">
								$1,000+
							</p>
							<Link
								to="/contact"
								className="block text-center bg-[#F44336] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D32F2F] transition-colors"
							>
								Select Bronze
							</Link>
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
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-semibold mb-4">
								Silver
							</h3>
							<p className="text-gray-600 mb-6">
								Ideal for medium-sized companies seeking brand
								visibility
							</p>
							<ul className="list-disc list-inside text-gray-600 space-y-3 mb-8">
								<li>All Bronze benefits</li>
								<li>Logo on competition robot</li>
								<li>Company banner at events</li>
								<li>Team demonstration visit</li>
								<li>Recruitment opportunities</li>
							</ul>
							<p className="text-2xl font-bold text-[#F44336] mb-6">
								$5,000+
							</p>
							<Link
								to="/contact"
								className="block text-center bg-[#F44336] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D32F2F] transition-colors"
							>
								Select Silver
							</Link>
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
										d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-semibold mb-4">
								Gold
							</h3>
							<p className="text-gray-600 mb-6">
								Premium partnership for industry leaders
							</p>
							<ul className="list-disc list-inside text-gray-600 space-y-3 mb-8">
								<li>All Silver benefits</li>
								<li>Premium logo placement</li>
								<li>Exclusive event access</li>
								<li>Custom project collaboration</li>
								<li>Annual recognition dinner</li>
								<li>Innovation showcase rights</li>
							</ul>
							<p className="text-2xl font-bold text-[#F44336] mb-6">
								$10,000+
							</p>
							<Link
								to="/contact"
								className="block text-center bg-[#F44336] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#D32F2F] transition-colors"
							>
								Select Gold
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Impact Section */}
			<section className="py-24 bg-white">
				<div className="container mx-auto px-4 max-w-6xl">
					<h2 className="text-4xl font-bold text-center mb-16 text-[#F44336]">
						Your Impact
					</h2>
					<div className="grid md:grid-cols-3 gap-12">
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
							<h3 className="text-2xl font-semibold mb-4">
								Education
							</h3>
							<p className="text-gray-600">
								Support hands-on learning experiences and
								technical skill development for engineering
								students.
							</p>
						</div>
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
							<h3 className="text-2xl font-semibold mb-4">
								Innovation
							</h3>
							<p className="text-gray-600">
								Enable the development of cutting-edge robotics
								technology and engineering solutions.
							</p>
						</div>
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
							<h3 className="text-2xl font-semibold mb-4">
								Community
							</h3>
							<p className="text-gray-600">
								Foster a thriving community of future engineers
								and industry leaders in robotics.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Sponsors;
