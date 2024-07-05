import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import React from "react";
import { useEffect } from "react";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;

const About = () => {
	useEffect(() => {
		new WOW.WOW().init();
	}, []);
	return (
		<>
			<SEO title="About" description="About" />
			<Header />
			{/*Breadcrumb Area*/}
			<section
				className="breadcrumb-area banner-1"
				data-background="images/banner/9.jpg"
			>
				<div className="text-block">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 v-center">
								<div className="bread-title">
									<h2>Boston Pixel</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*End Breadcrumb Area*/}
			{/*Start About*/}
			<section className="about-agency pad-tb block-1">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 v-center">
							<div className="about-image">
								<img
									src="images/BostonPixelAbout.png"
									alt="about us"
									className="img-fluid"
								/>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="common-heading text-l ">
								<h2>About Boston Pixel</h2>
								<p>
									At Boston Pixel, we three friends collaborate together 
									to bring Ideas to life. 
									Founded in 2020, with a
									strong presence in both Pakistan and the
									USA. What sets us apart is our unwavering
									commitment to streamlined processes,
									ensuring efficient and seamless delivery of
									exceptional digital solutions.With a team of
									4 talented individuals, we fuel our growth
									by harnessing cutting-edge technologies and
									staying ahead of industry trends. We take
									pride in our ability to connect the dots and
									bridge gaps, creating cohesive digital
									experiences that resonate with our clients
									and their audiences.
								</p>
								<p>
									We are passionate about powering startups
									and helping them thrive in the digital
									landscape. Our expertise and dedication
									enable us to transform ideas into reality,
									providing startups with the strong
									foundation they need to succeed. We believe
									that every pixel matters. With our
									innovative mindset and client-centric
									approach, we are driven to exceed
									expectations and make a lasting impact. Join
									us on this exciting journey as we shape the
									future of digital experiences, one pixel at
									a time
								</p>
							</div>
							<div className="row in-stats small about-statistics">
								<div className="col-lg-4 col-sm-4">
									<div className="statistics">
										<div className="statnumb counter-number">
											<span className="counter">34</span>
											<p>Happy Clients</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-sm-4">
									<div className="statistics">
										<div className="statnumb">
											<span className="counter">25</span>
											<span>k</span>
											<p>Hours Worked</p>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-sm-4">
									<div className="statistics mb0">
										<div className="statnumb counter-number">
											<span className="counter">79</span>
											<p>Projects Done</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*End About*/}
			{/*Start why-choose*/}
			<section className="why-choose pad-tb">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div className="common-heading">
								<span>We Are Awesome</span>
								<h2 className="mb30">Why Choose Us</h2>
							</div>
						</div>
					</div>
					<div className="row upset">
						<div className="col-lg-3 col-sm-6 mt30">
							<div className="s-block up-hor">
								<div className="s-card-icon">
									<img
										src="images/icons/research.svg"
										alt="service"
										className="img-fluid"
									/>
								</div>
								<h4>Reasearch and Analysis</h4>
								<p>
									Our research and analysis drive
									data-driven solutions for results.
								</p>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 mt30">
							<div className="s-block up-hor">
								<div className="s-card-icon">
									<img
										src="images/icons/chat.svg"
										alt="service"
										className="img-fluid"
									/>
								</div>
								<h4>Negotiation and power</h4>
								<p>
									We skillfully negotiate for the best deals,
									empowering client success.
								</p>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 mt30">
							<div className="s-block up-hor">
								<div className="s-card-icon">
									<img
										src="images/icons/monitor.svg"
										alt="service"
										className="img-fluid"
									/>
								</div>
								<h4>Creative and innovative solutions</h4>
								<p>
									Innovation is our core, delivering unique
									solutions with impact.
								</p>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 mt30">
							<div className="s-block up-hor">
								<div className="s-card-icon">
									<img
										src="images/icons/trasparency.svg"
										alt="service"
										className="img-fluid"
									/>
								</div>
								<h4>Trasparency and ease of work</h4>
								<p>
									We prioritize open communication, ensuring
									seamless collaboration.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer/>
		</>
	);
};

export default About;
