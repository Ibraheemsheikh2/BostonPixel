import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import React from "react";
import { useEffect } from "react";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;


const Career = () => {
	useEffect(() => {
		new WOW.WOW().init();
	}, []);
	return (
		<>
			<SEO title={"Career"} />
			<Header />
			<section
				className="breadcrumb-areav2"
				data-background="/images/banner/8.jpg"
			>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-7">
							<div className="bread-titlev2">
								<h1
									className="wow fadeInUp"
									data-wow-delay=".2s"
								>
									Job Openings
								</h1>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div>
				<section className="about-agencys pad-tb block-1 dark-bg3">
					<div className="container">
						<div className="row justify-content-between">
							<div className="col-lg-6">
								<div className="common-heading text-l">
									<h2 className="mb20">
										Career and Culture at Boston Pixel
									</h2>
									<p>
										At Boston Pixel, we foster a culture of
										growth and support for individuals.
										We&apos;re more than just a digital
										agency; we&apos;re a creative family
										pushing the boundaries of design,
										development, and innovation. Join us and
										explore your passions, unleash your
										creativity, and make an impact in the
										digital world. We believe in teamwork,
										open communication, and continuous
										learning. With cutting-edge tools and
										training programs, we invest in your
										growth. We celebrate achievements, value
										work-life balance, and prioritize a
										positive work environment. Whether
										you&apos;re a designer, developer, app
										expert, or passionate about AR/VR and
										game development, Boston Pixel is the
										place for you. Shape the future of
										digital experiences with us. Your
										journey to success starts here.
									</p>
									<a
										href="#jobs"
										className="btn-main bg-btn2 text-decoration-none  mt30"
									>
										{" "}
										View Opening{" "}
										<i className="fas fa-chevron-right fa-icon" />
										<span className="circle" />
									</a>
								</div>
							</div>
							<div className="col-lg-5">
								<div className="image-block mb0 m-mt30">
									<img
										src="images/career/career.png"
										alt="about"
										className="img-fluid"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*End About*/}
				{/*Start Why Choose*/}
				<section className="service-block pad-tb bg-gradient7">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-8">
								<div className="common-heading ptag">
									<h2>
										Perks for Employees at Boston Pixell
									</h2>
								</div>
							</div>
						</div>
						<div className="row justify-content-center">
							<div
								className="col-lg-4 col-sm-6 mt30  wow fadeIn"
								data-wow-delay=".2s"
							>
								<div className="s-block wide-sblock">
									<div className="s-card-icon">
										<img
											src="images/icons/teama.svg"
											alt="service"
											className="img-fluid"
										/>
									</div>
									<div className="s-block-content">
										<h4>Competitive Compensation</h4>
										
									</div>
								</div>
							</div>
							<div
								className="col-lg-4 col-sm-6 mt30 wow fadeIn"
								data-wow-delay=".5s"
							>
								<div className="s-block wide-sblock">
									<div className="s-card-icon">
										<img
											src="images/icons/link.svg"
											alt="service"
											className="img-fluid"
										/>
									</div>
									<div className="s-block-content">
										<h4>Professional Development</h4>
										
									</div>
								</div>
							</div>
							<div
								className="col-lg-4 col-sm-6 mt30 wow fadeIn"
								data-wow-delay=".8s"
							>
								<div className="s-block wide-sblock">
									<div className="s-card-icon">
										<img
											src="images/icons/tech.svg"
											alt="service"
											className="img-fluid"
										/>
									</div>
									<div className="s-block-content">
										<h4>Growth Opportunities with us</h4>
										
									</div>
								</div>
							</div>
							<div
								className="col-lg-4 col-sm-6 mt30 wow fadeIn"
								data-wow-delay="1.1s"
							>
								<div className="s-block wide-sblock">
									<div className="s-card-icon">
										<img
											src="images/icons/hi.svg"
											alt="service"
											className="img-fluid"
										/>
									</div>
									<div className="s-block-content">
										<h4>Collaborative Environment</h4>
										
									</div>
								</div>
							</div>
							<div
								className="col-lg-4 col-sm-6 mt30 wow fadeIn"
								data-wow-delay="1.4s"
							>
								<div className="s-block wide-sblock">
									<div className="s-card-icon">
										<img
											src="images/icons/badge.svg"
											alt="service"
											className="img-fluid"
										/>
									</div>
									<div className="s-block-content">
										<h4>Employee Recognition with us</h4>
										
									</div>
								</div>
							</div>
							<div
								className="col-lg-4 col-sm-6 mt30 wow fadeIn"
								data-wow-delay="1.7s"
							>
								<div className="s-block wide-sblock">
									<div className="s-card-icon">
										<img
											src="images/icons/tin.svg"
											alt="service"
											className="img-fluid"
										/>
									</div>
									<div className="s-block-content">
										<h4>Team Outings and Events</h4>
										
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*End Why Choose*/}
				{/*Start Enquire Form*/}
				<section className="contact-page pad-tb" id="jobs">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-8">
								<div className="common-heading ptag">
									<h2>Current Openings</h2>
								</div>
							</div>
						</div>
						<div className="row justify-content-center">
							<div className="col-lg-10">
								<div className="career-card-div">
									<div
										className="accordion"
										id="accordionExample"
									>
										<div className="accordion-item">
											<h2
												className="accordion-header"
												id="headingOne"
											>
												<button
													className="accordion-button"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapse-1"
													aria-expanded="true"
													aria-controls="collapseOne"
												>
													Node JS Backend Developer.
												</button>
											</h2>
											<div
												id="collapse-1"
												className="accordion-collapse collapse show"
												aria-labelledby="headingOne"
												data-bs-parent="#accordionExample"
											>
												<div className="accordion-body">
													<div className="data-reqs">
														<h5 className="pt20 pb20">
															Overview
														</h5>
														<p>
														Boston Pixel is actively seeking a talented Node.js Backend Developer to join our team. If you have a passion for building robust and scalable web applications and possess a strong foundation in Node.js development, we want to connect with you!{" "}
														</p>
														<h5 className="pt20 pb20">
															Required experience
														</h5>
														<p>
															1-2 Years{" "}
														</p>
														<h4 className="pb20 pt20">
															Skills Required:
														</h4>
														<ul className="list-ul ul-check">
															<li>
															Develop and maintain efficient and secure backend systems using Node.js
															</li>
															<li>
															Collaborate with cross-functional teams to design and implement APIs and data models
															</li>
															<li>
															Write clean, modular, and well-documented code
															</li>
															<li>
															Optimize application performance and scalability															</li>
															<li>
															Identify and address technical issues and bugs
															</li>
															<li>
																Strong knowledge
																in database
																(Mysql)
															</li>
															<li>
															Stay up-to-date with industry trends and technologies
															</li>
															<li>
																Good
																understanding of
																MVC concepts and
																design patterns
															</li>
															<li>
																Strong object
																oriented
																programming and
																design skills
															</li>
														
														</ul>

														<a
															href="#"
															className="btn-main bg-btn2 text-decoration-none  mt20"
															data-bs-toggle="modal"
															data-bs-target="#modalform"
														>
															Apply Now
															<i className="fas fa-chevron-right fa-icon" />
															<span className="circle" />
														</a>
													</div>
												</div>
											</div>
										</div>
										
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*End Enquire Form*/}
				<div className="popup-modals">
					<div className="modal" id="modalform">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<div className="common-heading">
										<h4 className="mt0 mb0">Apply Now</h4>
									</div>
									<button
										type="button"
										className="closes"
										data-bs-dismiss="modal"
									>
										×
									</button>
								</div>
								{/* Modal body */}
								<div className="modal-body pt40 pb60">
									<div className="form-block fdgn2">
										<form
											id="contact-form"
											method="post"
											action="#"
										>
											<div className="fieldsets row">
												<div className="col-md-6 form-group">
													<input
														id="form_name"
														type="text"
														name="name"
														placeholder="Enter your name *"
														required="required"
													/>{" "}
												</div>
												<div className="col-md-6 form-group">
													<input
														id="form_email"
														type="email"
														name="email"
														placeholder="Enter your email *"
														required="required"
													/>{" "}
												</div>
											</div>
											<div className="fieldsets row">
												<div className="col-md-6 form-group">
													<input
														id="form_phone"
														type="text"
														name="phone"
														placeholder="Enter your Phone No *"
														required="required"
													/>{" "}
												</div>
												<div className="col-md-6 form-group">
													<select
														id="form_need"
														name="need"
														required="required"
													>
														<option value>
															Select Post
														</option>
														<option value="Graphic Design">
															Graphic Design
														</option>
														<option value="Web Design">
															Web Design
														</option>
														<option value="App Design">
															App Design
														</option>
														<option value="Other">
															Other
														</option>
													</select>
												</div>
											</div>
											<div className="fieldsets form-group">
												{" "}
												<textarea
													id="form_message"
													name="message"
													placeholder="Message *"
													rows={4}
													required="required"
													defaultValue={""}
												/>{" "}
											</div>
											<div className="fieldsets- row">
												<div className="col-md-12 form-group">
													<div className="custom-file">
														<input
															type="file"
															className="custom-file-input mb0"
															id="customFile"
														/>
														<label
															className="custom-file-label"
															htmlFor="customFile"
														>
															Choose file
														</label>
													</div>
													<p>
														<small>
															Please upload
															maximum 5 files Only
															pdf, docx and doc
															files.
														</small>
													</p>
												</div>
											</div>
											<div className="fieldsets mt20">
												<button
													type="submit"
													className=" btn-main bg-btn"
												>
													Submit Application
													<span className="circle" />
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Career;
