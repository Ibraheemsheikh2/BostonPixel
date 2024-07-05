import { footer } from "@/data/home";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<>
			<div className="footer-row1">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="email-subs">
								<h3>Get New Insights Weekly</h3>
								<p>
									News letter dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt. Enter your email
								</p>
							</div>
						</div>
						<div className="col-lg-6 v-center">
							<div className="email-subs-form">
								<form>
									<input
										type="email"
										placeholder="Email Your Address"
										name="emails"
									/>
									<button
										type="submit"
										name="submit"
										className="btn-main bg-btn"
									>
										Subscribe
										<i className="fas fa-chevron-right fa-icon" />
										<span className="circle" />
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<footer className="footerdez dark-footer">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-4 col-sm-6">
							<div className="footerdez-a">
								<h2>{footer.title}</h2>
								<p className="mt10">{footer.description}</p>
								<div className="contactinfo mt30">
									<Link
										href={`mailto:${footer.contact.email}`}
									>
										{footer.contact.email} <span>→</span>
									</Link>
									<Link href={`tel:${footer.contact.phone}`}>
										{footer.contact.phone} <span>→</span>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-7 col-sm-7">
							<div className="row ftts">
								<div className="col-lg-4 col-sm-6">
									<h5>OUR ADDRESS</h5>
									{footer.addresses.map((address, index) => (
										<div key={index}>
											<h4>{address.area}</h4>
											<p>{address.address}</p>
										</div>
									))}
								</div>
								<div className="col-lg-4 col-sm-6">
									<h5>SUPPORT</h5>
									<ul className="footer-address-list link-hover">
										<li>
											<Link href="/schedule-meeting">
												Schedule Meeting
											</Link>
										</li>
										<li>
											<Link href="/about">
												About us
											</Link>
										</li>
										<li>
											<Link href="/portfolio">
												Portfolio
											</Link>
										</li>
										<li>
											<Link href="/team-members">
												Team Members
											</Link>
										</li>
										<li>
											<Link href="/blog">Blog</Link>
										</li>
										<li>
											<Link href="/career">Career</Link>
										</li>
										<li>
											<Link href="/contact">
												Contact us
											</Link>
										</li>
									</ul>
								</div>
								<div className="col-lg-4 col-sm-6">
									<h5>Services</h5>
									<ul className="footer-address-list link-hover">
										<li>
											<Link href="/view-process-website-design-and-development">
												Web Development.
											</Link>
										</li>
										<li>
											<Link href="/view-process-mobile-app-design-and-development">
												Mobile App Development.
											</Link>
										</li>
										<li>
											<Link href="/view-process-game-development">
												Game Development.
											</Link>
										</li>
										<li>
											<Link href="/view-process-ar-vr-development">AR/VR.</Link>
										</li>
										<li>
											<Link href="/view-process-consultancy">
												Consultancy
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="row ftts mt80 flexend">
								<div className="col-lg-4 col-sm-6">
									<h5>Follow Us</h5>
									<div className="ff-social-icons mt30">
										<Link href="https://www.facebook.com/profile.php?id=100092660391361" target="blank">
											<i className="fab fa-facebook" />
										</Link>
										<Link href="https://twitter.com/boston_pixel" target="blank">
											<i className="fab fa-twitter" />
										</Link>
										<Link href="#" target="blank">
											<i className="fab fa-linkedin" />
										</Link>
										<Link href="https://www.instagram.com/boston_pixel/" target="blank">
											<i className="fab fa-instagram" />
										</Link>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="footer-copyrights-">
										<p>Copyright © 2022-2023 Boston Pixel.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
