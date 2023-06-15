import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import React from "react";
import { useEffect } from "react";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;


const Contact = () => {
	useEffect(() => {
		new WOW.WOW().init();
	}, []);
	return (
		<>
			<SEO title="Contact Us" />
			<Header />
			<div>
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
										Contact Us
									</h1>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*End Breadcrumb Area*/}
				{/*Start Enquire Form*/}
				<section className="contact-page pad-tb">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-6 v-center">
								<div className="common-heading text-l">
									<span>Contact Now</span>
									<h2 className="mt0 mb0">
										Have Question? Write a Message
									</h2>
									<p className="mb60 mt20">
										We will catch you as early as we receive
										the message
									</p>
								</div>
								<div className="form-block">
									<form
										id="contactForm"
										data-bs-toggle="validator"
										className="shake"
									>
										<div className="row">
											<div className="form-group col-sm-6">
												<input
													type="text"
													id="name"
													placeholder="Enter name"
													required
													data-error="Please fill Out"
												/>
												<div className="help-block with-errors" />
											</div>
											<div className="form-group col-sm-6">
												<input
													type="email"
													id="email"
													placeholder="Enter email"
													required
												/>
												<div className="help-block with-errors" />
											</div>
										</div>
										<div className="row">
											<div className="form-group col-sm-6">
												<input
													type="text"
													id="mobile"
													placeholder="Enter mobile"
													required
													data-error="Please fill Out"
												/>
												<div className="help-block with-errors" />
											</div>
											<div className="form-group col-sm-6">
												<select
													name="Dtype"
													id="Dtype"
													required
												>
													<option value>
														Select Requirement
													</option>
													<option value="web">
														Website Development
													</option>
													<option value="graphic">
														UI/UX Design
													</option>
													<option value="video">
														Mobile/Web App Development
													</option>
													<option value="video">
														Game Development
													</option>
												</select>
												<div className="help-block with-errors" />
											</div>
										</div>
										<div className="form-group">
											<textarea
												id="message"
												rows={5}
												placeholder="Enter your message"
												required
												defaultValue={""}
											/>
											<div className="help-block with-errors" />
										</div>
										<button
											type="submit"
											id="form-submit"
											className="btn  btn-main bg-btn"
										>
											Submit <span className="circle" />
										</button>
										<div
											id="msgSubmit"
											className="h3 text-center hidden"
										/>
										<div className="clearfix" />
									</form>
								</div>
							</div>
							<div className="col-lg-5 v-center">
								<div className="contact-details">
									<div
										className="contact-card wow fadeIn"
										data-wow-delay=".2s"
									>
										<div className="info-card v-center">
											<span>
												<i className="fas fa-phone-alt" />{" "}
												Phone:
											</span>
											<div className="info-body">
												<p>
													Assistance hours: Monday –
													Friday, 9 am to 5 pm
												</p>
												<a href="tel:+92335106668">
													+92 335 106668
												</a>
											</div>
										</div>
									</div>
									<div
										className="email-card mt30 wow fadeIn"
										data-wow-delay=".5s"
									>
										<div className="info-card v-center">
											<span>
												<i className="fas fa-envelope" />{" "}
												Email:
											</span>
											<div className="info-body">
												<p>
													Our support team will get
													back to in 24-h during
													standard business hours.
												</p>
												<a href="mailto:contact@bostonpixel.com">
													contact@bostonpixel.com
												</a>
											</div>
										</div>
									</div>
									<div
										className="skype-card mt30 wow fadeIn"
										data-wow-delay=".9s"
									>
										<div className="info-card v-center">
											<span>
												<i className="fab fa-skype" />{" "}
												Skype:
											</span>
											<div className="info-body">
												<p>
													We Are Online: Monday –
													Friday, 9 am to 5 pm
												</p>
												<a href="skype:Boston Pixel?call">
													@Boston Pixel
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>

			<Footer />
		</>
	);
};

export default Contact;
