import React from "react";

function Contact() {
	return (
		<div>
			{/* Header Section */}
			<section className="bg-[#F44336] text-white py-24">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-5xl font-bold mb-8">Contact Us</h1>
					<p className="text-xl max-w-3xl mx-auto leading-relaxed">
						Have questions about Met Firsts Create Design Team? We'd
						love to hear from you. Reach out to us using the form
						below or through our contact information.
					</p>
				</div>
			</section>

			{/* Contact Form Section */}
			<section className="py-24 bg-white">
				<div className="container mx-auto px-4 max-w-6xl">
					<div className="grid md:grid-cols-2 gap-16">
						{/* Contact Information */}
						<div>
							<h2 className="text-4xl font-bold mb-12 text-[#F44336]">
								Get in Touch
							</h2>
							<div className="space-y-8">
								<div>
									<h3 className="text-xl font-semibold mb-2">
										Location
									</h3>
									<p className="text-gray-700 text-lg">
										123 Innovation Drive
										<br />
										New York, NY 10001
									</p>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										Email
									</h3>
									<a
										href="mailto:info@metfirstscreate.org"
										className="text-[#F44336] text-lg hover:text-[#D32F2F] transition-colors"
									>
										info@metfirstscreate.org
									</a>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										Phone
									</h3>
									<a
										href="tel:+1234567890"
										className="text-[#F44336] text-lg hover:text-[#D32F2F] transition-colors"
									>
										(123) 456-7890
									</a>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2">
										Social Media
									</h3>
									<div className="flex space-x-4">
										<a
											href="https://linkedin.com"
											target="_blank"
											rel="noopener noreferrer"
											className="text-[#F44336] hover:text-[#D32F2F] transition-colors"
										>
											LinkedIn
										</a>
										<a
											href="https://twitter.com"
											target="_blank"
											rel="noopener noreferrer"
											className="text-[#F44336] hover:text-[#D32F2F] transition-colors"
										>
											Twitter
										</a>
										<a
											href="https://instagram.com"
											target="_blank"
											rel="noopener noreferrer"
											className="text-[#F44336] hover:text-[#D32F2F] transition-colors"
										>
											Instagram
										</a>
									</div>
								</div>
							</div>
						</div>

						{/* Contact Form */}
						<div className="bg-gray-50 p-8 rounded-xl">
							<form className="space-y-6">
								<div>
									<label
										htmlFor="name"
										className="block text-lg font-medium text-gray-700 mb-2"
									>
										Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F44336] focus:border-transparent"
										placeholder="Your name"
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-lg font-medium text-gray-700 mb-2"
									>
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F44336] focus:border-transparent"
										placeholder="your@email.com"
									/>
								</div>
								<div>
									<label
										htmlFor="subject"
										className="block text-lg font-medium text-gray-700 mb-2"
									>
										Subject
									</label>
									<input
										type="text"
										id="subject"
										name="subject"
										className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F44336] focus:border-transparent"
										placeholder="What's this about?"
									/>
								</div>
								<div>
									<label
										htmlFor="message"
										className="block text-lg font-medium text-gray-700 mb-2"
									>
										Message
									</label>
									<textarea
										id="message"
										name="message"
										rows="6"
										className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F44336] focus:border-transparent"
										placeholder="Your message..."
									></textarea>
								</div>
								<button
									type="submit"
									className="w-full bg-[#F44336] text-white text-lg font-semibold py-3 rounded-lg hover:bg-[#D32F2F] transition-colors"
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Contact;
