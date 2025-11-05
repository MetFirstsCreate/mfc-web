import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/mfc-logo.png";

function Footer() {
	return (
		<footer className="bg-gray-900 text-white pt-16 pb-8">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-3 gap-12 mb-16">
					{/* Brand Section */}
					<div className="space-y-4">
						<div className="flex items-center space-x-3">
							<div className="bg-white p-2 rounded-full">
								<img
									src={logo}
									alt="MFC Logo"
									className="w-8 h-8 object-contain"
								/>
							</div>
							<span className="text-xl font-bold">
								Met Firsts Create
							</span>
						</div>
						<p className="text-gray-400">Anyone Can Engineer</p>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="text-lg font-semibold mb-4">
							Contact Us
						</h3>
						<ul className="space-y-3 text-gray-400">
							<li>
								<a
									href="mailto:metfirstscreate@gmail.com"
									className="hover:text-white transition-colors"
								>
									metfirstscreate@gmail.com
								</a>
							</li>
							<li>
								Toronto Metropolitan University
								<br />
								350 Victoria St
								<br />
								Toronto, ON M5B 2K3
							</li>
						</ul>
					</div>

					{/* Connect With Us */}
					<div>
						<h3 className="text-lg font-semibold mb-4">
							Connect With Us
						</h3>
						<ul className="space-y-3 text-gray-400">
							<li>
								<a
									href="https://www.instagram.com/metfirstscreate/"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-white transition-colors"
								>
									Instagram
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/company/metfirstscreate/posts/?feedView=all"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-white transition-colors"
								>
									LinkedIn
								</a>
							</li>
							<li>
								<a
									href="https://github.com/MetFirstsCreate"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-white transition-colors"
								>
									GitHub
								</a>
							</li>
							<li>
								<a
									href="https://discord.gg/metfirstscreate"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-white transition-colors"
								>
									Discord
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-gray-800 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<p className="text-gray-400">
							© {new Date().getFullYear()} Met Firsts Create
							Design Team. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
