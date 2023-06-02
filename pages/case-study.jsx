import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import React from "react";
import { useEffect } from "react";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;


const CaseStudy = () => {
	useEffect(() => {
		new WOW.WOW().init();
	}, []);
	return (
		<>
			<SEO title={"Case Study"} description={"Case Study"} />
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
									Case Study
								</h1>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*Start Case Study About*/}
			<section className="case-study pad-tb">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="image-block upset">
								<img
									src="images/case-study/app-intro.png"
									alt="case study"
									className="img-fluid no-shadow"
								/>
							</div>
						</div>
						<div className="col-lg-6 block-1 v-center">
							<div className="common-heading inner-heading text-l pl25">
								<span>About The Project</span>
								<h2>On-Demand Food Delivery Application</h2>
								<p>
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry&apos;s standard
									dummy text ever since the 1500s, when an
									unknown printer took a galley of type and
									scrambled it to make a type specimen book.
								</p>
								<p>
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. is simply
									dummy text of the printing and typesetting
									industry.{" "}
								</p>
							</div>
							<div className="project-platform mt60 pl25">
								<div className="project-platform-used -shadow">
									<a href="#">
										<img
											src="images/icons/android.svg"
											alt="android"
										/>
									</a>
								</div>
								<div className="project-platform-used -shadow">
									<a href="#">
										<img
											src="images/icons/apple.svg"
											alt="apple"
										/>
									</a>
								</div>
								<div className="project-platform-used -shadow">
									<a href="#">
										<img
											src="images/icons/windows.svg"
											alt="windows"
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*End Case Study About*/}
			<section className="case-study pad-tb bg-gradient6 deep-dark">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-10">
							<div className="common-heading">
								<span>App Features</span>
								<h2 className="mb30">
									As per client&apos;s need Niwax has
									developed Food Delivery App.
								</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6">
							<h4 className="mt20 mb10">App Features</h4>
							<ul className="list-style-">
								<li>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit.
								</li>
								<li>
									Nullam porta nulla in sapien molestie, ut
									finibus nisi euismod.
								</li>
								<li>
									Curabitur euismod elit sed venenatis
									porttitor.
								</li>
								<li>
									Morbi convallis dolor ut tincidunt
									porttitor.
								</li>
								<li>
									Phasellus eleifend massa non enim elementum,
									a venenatis erat sollicitudin.
								</li>
								<li>
									Aenean sit amet elit euismod, aliquam quam
									eu, semper tellus.
								</li>
								<li>
									Maecenas sed ligula tristique, vestibulum
									tellus nec, dictum nisl.
								</li>
							</ul>
						</div>
						<div className="col-lg-6">
							<h4 className="mt20 mb10">Admin Features</h4>
							<ul className="list-style-">
								<li>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit.
								</li>
								<li>
									Nullam porta nulla in sapien molestie, ut
									finibus nisi euismod.
								</li>
								<li>
									Curabitur euismod elit sed venenatis
									porttitor.
								</li>
								<li>
									Morbi convallis dolor ut tincidunt
									porttitor.
								</li>
								<li>
									Phasellus eleifend massa non enim elementum,
									a venenatis erat sollicitudin.
								</li>
								<li>
									Aenean sit amet elit euismod, aliquam quam
									eu, semper tellus.
								</li>
								<li>
									Maecenas sed ligula tristique, vestibulum
									tellus nec, dictum nisl.
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			{/*Start Project Challenges*/}
			<section className="case-study pad-tb">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-sm-6">
							<h2 className="mt20 mb20">Challenges</h2>
							<p>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry&apos;s standard dummy text ever
								since the 1500s, when an unknown printer took a
								galley of type and scrambled it to make a type
								specimen book.
							</p>
							<ul className="list-style- mt30">
								<li>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit.
								</li>
								<li>
									Nullam porta nulla in sapien molestie, ut
									finibus nisi euismod.
								</li>
								<li>
									Curabitur euismod elit sed venenatis
									porttitor.
								</li>
								<li>
									Morbi convallis dolor ut tincidunt
									porttitor.
								</li>
								<li>
									Phasellus eleifend massa non enim elementum,
									a venenatis erat sollicitudin.
								</li>
								<li>
									Aenean sit amet elit euismod, aliquam quam
									eu, semper tellus.
								</li>
								<li>
									Maecenas sed ligula tristique, vestibulum
									tellus nec, dictum nisl.
								</li>
							</ul>
						</div>
						<div className="col-lg-6 col-sm-6">
							<div className="project-view m-mt30">
								<img
									src="images/case-study/app-view.png"
									alt="case study"
									className="img-fluid"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*End Project Challenges*/}
			{/*Start Solutions*/}
			<section className="case-study pad-tb bg-gradient5 deep-dark">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 block-1 v-center">
							<div className="common-heading inner-heading text-l pr25">
								<span>Solutions</span>
								<h2>How We Work</h2>
								<h4>
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry.
								</h4>
								<p>
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry&apos;s standard
									dummy text ever since the 1500s, when an
									unknown printer took a galley of type and
									scrambled it to make a type specimen book.
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum is simply dummy text of the printing
									and typesetting industry. is simply dummy
									text of the printing and typesetting
									industry.{" "}
								</p>
							</div>
							<div className="card-nx row">
								<div className="col-lg-3 col-md-3 col-sm-6 col-6 mt30">
									<div className="icon-card-">
										<img
											src="images/icons/logo-and-branding.svg"
											alt="case study"
											className="img-fluid"
										/>
										<h4>UI/UX Design</h4>
									</div>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6 col-6 mt30">
									<div className="icon-card-">
										<img
											src="images/icons/branding.svg"
											alt="case study"
											className="img-fluid"
										/>
										<h4>Front-end Dev</h4>
									</div>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6 col-6 mt30">
									<div className="icon-card-">
										<img
											src="images/icons/back.svg"
											alt="case study"
											className="img-fluid"
										/>
										<h4>Back-end Dev</h4>
									</div>
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6 col-6 mt30">
									<div className="icon-card-">
										<img
											src="images/icons/seo.svg"
											alt="case study"
											className="img-fluid"
										/>
										<h4>SEO Optimization</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*End Solutions*/}
			<div className="case-study pad-tb">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="project-screens owl-carousel">
								<div className="screen-splits">
									{" "}
									<img
										src="images/case-study/restro-app-1.jpg"
										alt="case study"
										className="img-fluid"
									/>
								</div>
								<div className="screen-splits">
									{" "}
									<img
										src="images/case-study/restro-app-2.jpg"
										alt="case study"
										className="img-fluid"
									/>
								</div>
								<div className="screen-splits">
									{" "}
									<img
										src="images/case-study/restro-app-3.jpg"
										alt="case study"
										className="img-fluid"
									/>
								</div>
								<div className="screen-splits">
									{" "}
									<img
										src="images/case-study/restro-app-4.jpg"
										alt="case study"
										className="img-fluid"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*Start Result*/}
			<section className="case-study pad-tb deep-dark">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div className="common-heading">
								<h2 className="mb30">See The Result</h2>
							</div>
						</div>
					</div>
					<div className="row in-stats card-stats">
						<div className="col-lg-3 col-sm-6 col-6 mt30">
							<div className="statistics">
								<div className="statnumb">
									<span className="counter">20</span>
									<span>%</span>
									<p>ROI Increase</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 col-6 mt30">
							<div className="statistics">
								<div className="statnumb counter-number">
									<span className="counter">40</span>
									<span>%</span>
									<p>Traffic Increase</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 col-6 mt30">
							<div className="statistics">
								<div className="statnumb counter-number">
									<span className="counter">30</span>
									<span>%</span>
									<p>Order Increase</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 col-6 mt30">
							<div className="statistics">
								<div className="statnumb counter-number">
									<span className="counter">60</span>
									<span>%</span>
									<p>Order Increase</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*End Result*/}
			{/*Start reveiws*/}
			<section className="reviews-block bg-gradient5 pad-tb">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="common-heading ptag">
								<span>Reviews</span>
								<h2>Client Testimonials</h2>
								<p className="mb30">
									Check our customers success stories.
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 mt30">
							<div className="reviews-card pr-shadow">
								<div className="row v-center">
									<div className="col">
										{" "}
										<span className="revbx-lr">
											<i className="fas fa-quote-left" />
										</span>{" "}
									</div>
									<div className="col">
										{" "}
										<span className="revbx-rl">
											<img
												src="images/client/envato.png"
												alt="review service logo"
											/>
										</span>{" "}
									</div>
								</div>
								<div className="review-text">
									<p>
										Lorem Ipsum is simply dummy text of the
										printing and typesetting industry. Lorem
										Ipsum has been the industry&apos;s
										standard dummy text ever since the
										1500s, when an unknown printer took a
										galley of type and scrambled it to make
										a type specimen book.
									</p>
								</div>
								<div className="-client-details-">
									<div className="reviewer-text">
										<h4>Sue Vaneer</h4>
										<p>
											Business Owner,{" "}
											<small>Jaipur</small>
										</p>
										<div className="star-rate">
											<ul>
												<li>
													{" "}
													<a
														href="javascript:void(0)"
														className="chked"
													>
														<i
															className="fas fa-star"
															aria-hidden="true"
														/>
													</a>{" "}
												</li>
												<li>
													{" "}
													<a
														href="javascript:void(0)"
														className="chked"
													>
														<i
															className="fas fa-star"
															aria-hidden="true"
														/>
													</a>{" "}
												</li>
												<li>
													{" "}
													<a
														href="javascript:void(0)"
														className="chked"
													>
														<i
															className="fas fa-star"
															aria-hidden="true"
														/>
													</a>{" "}
												</li>
												<li>
													{" "}
													<a
														href="javascript:void(0)"
														className="chked"
													>
														<i
															className="fas fa-star"
															aria-hidden="true"
														/>
													</a>{" "}
												</li>
												<li>
													{" "}
													<a href="javascript:void(0)">
														<i
															className="fas fa-star"
															aria-hidden="true"
														/>
													</a>{" "}
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 mt30">
							<div className="reviews-card pr-shadow">
								<div className="row v-center">
									<div className="col">
										{" "}
										<span className="revbx-lr">
											<i className="fas fa-quote-left" />
										</span>{" "}
									</div>
									<div className="col">
										{" "}
										<span className="revbx-rl">
											<img
												src="images/client/envato.png"
												alt="review service logo"
											/>
										</span>{" "}
									</div>
								</div>
								<div className="review-text">
									<p>
										Lorem Ipsum is simply dummy text of the
										printing and typesetting industry. Lorem
										Ipsum has been the industry&apos;s
										standard dummy text ever since the
										1500s, when an unknown printer took a
										galley of type and scrambled it to make
										a type specimen book.
									</p>
								</div>
								<div className="-client-details-">
									<div className="reviewer-text">
										<h4>Don Stairs</h4>
										<p>
											Business Owner,{" "}
											<small>Jaipur</small>
										</p>
										<div className="star-rate">
											<ul>
												<li>
													{" "}
													<a
														href="javascript:void(0)"
														className="chked"
													>
														<i
															className="fas fa-star"
															aria-hidden="true"
														/>
													</a>{" "}
												</li>
												<li>
													{" "}
													<a
														href="javascript:void(0)"
														className="chked"
													>
														<i
															className="fas fa-star"
															aria-hidden="true"
														/>
													</a>{" "}
												</li>
												<li>
													{" "}
													<a
														href="javascript:void(0)"
														className="chked"
													>
														<i
															className="fas fa-star"
															aria-hidden="true"
														/>
													</a>{" "}
												</li>
												<li>
													{" "}
													<a
														href="javascript:void(0)"
														className="chked"
													>
														<i
															className="fas fa-star"
															aria-hidden="true"
														/>
													</a>{" "}
												</li>
												<li>
													{" "}
													<a href="javascript:void(0)">
														<i
															className="fas fa-star"
															aria-hidden="true"
														/>
													</a>{" "}
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 mt30">
							<div className="reviews-card pr-shadow">
								<div className="row v-center">
									<div className="col">
										{" "}
										<span className="revbx-lr">
											<i className="fas fa-quote-left" />
										</span>{" "}
									</div>
									<div className="col">
										{" "}
										<span className="revbx-rl">
											<img
												src="images/client/envato.png"
												alt="review service logo"
											/>
										</span>{" "}
									</div>
								</div>
								<div className="review-text">
									<p>
										Lorem Ipsum is simply dummy text of the
										printing and typesetting industry. Lorem
										Ipsum has been the industry&apos;s
										standard dummy text ever since the
										1500s, when an unknown printer took a
										galley of type and scrambled it to make
										a type specimen book.
									</p>
								</div>
								<div className="-client-details-">
									<div className="reviewer-text">
										<h4>Russ L. Rogers</h4>
										<p>
											Business Owner,{" "}
											<small>Jaipur</small>
										</p>
										<div className="star-rate">
											<ul>
												<li>
													{" "}
													<a
														href="javascript:void(0)"
														className="chked"
													>
														<i
															className="fas fa-star"
															aria-hidden="true"
														/>
													</a>{" "}
												</li>
												<li>
													{" "}
													<a
														href="javascript:void(0)"
														className="chked"
													>
														<i
															className="fas fa-star"
															aria-hidden="true"
														/>
													</a>{" "}
												</li>
												<li>
													{" "}
													<a
														href="javascript:void(0)"
														className="chked"
													>
														<i
															className="fas fa-star"
															aria-hidden="true"
														/>
													</a>{" "}
												</li>
												<li>
													{" "}
													<a
														href="javascript:void(0)"
														className="chked"
													>
														<i
															className="fas fa-star"
															aria-hidden="true"
														/>
													</a>{" "}
												</li>
												<li>
													{" "}
													<a href="javascript:void(0)">
														<i
															className="fas fa-star"
															aria-hidden="true"
														/>
													</a>{" "}
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*End reviews*/}
			<Footer />
		</>
	);
};

export default CaseStudy;
