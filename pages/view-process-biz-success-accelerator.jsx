import Header from "@/components/Header";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import React from "react";
import { useEffect } from "react";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;


const ViewProcess = () => {
	useEffect(() => {
		new WOW.WOW().init();
	}, []);
	return (
		<>
			<SEO title="Business Take-Off" description="A whole Package which let&apos;s you get started with your business in least amounnt of time!" />
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
									Business Starter Accelarator Program
									
								</h1>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="service-block pad-tb light-dark">
				<div className="container">
					
					<div className="row upset justify-content-center mt60">
						<div className="col-lg-4 v-center order1">
							<div className="image-block1">
								<img
									src="/images/Biz Success/Requirements-Gathering.png"
									alt="Process"
									className="img-fluid"
								/>
							</div>
						</div>
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>1</span>
								<h3>Requirement Gathering</h3>
								<p>
									We get on a call with you to discuss about your business.
									Once we finish the call, we formalize the requirements. 
								</p>
							</div>
						</div>
					</div>
					<div className="row upset justify-content-center mt60">
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>2</span>
								<h3>Landing Page Design and Development</h3>
								<p>
								During the second stage, we design a high end landing page with user experience and customer journey kept in mind.
								Afterwards, we develop and optimize the Landing Page for Message conveyance, Lead Generation and Conversions.
								</p>
							</div>
						</div> cv 
						<div className="col-lg-4 v-center order1">
							<div className="image-block1">
								<img
									src="/images/Biz Success/Landing Page.png"
									alt="Process"
									className="img-fluid"
								/>
							</div>
						</div>
					</div>
					<div className="row upset justify-content-center mt60">
						<div className="col-lg-4 v-center order1">
							<div className="image-block1">
								<img
									src="/images/Biz Success/Google ads.png"
									alt="Process"
									className="img-fluid"
								/>
							</div>
						</div>
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>3</span>
								<h3>Google Ads Campaign and Calendly for Meeting Bookings Integration</h3>
								<p>
								During this step, our teams setups an effective Google Ads campaign by identifying the keywords and the right demographics, making Ideal Custome Persona&apos;s.
								We integrate Calendly for your leads to book meeting sessions with you via Google Meet/Zoom.
								</p>
							</div>
						</div>
					</div>
					<div className="row upset justify-content-center mt60">
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>4</span>
								<h3> Deployment </h3>
								<p>
								
								We deploy the website on your registered Domain and setup your Google Business Page.
								We help you in generating leads for your business!

								</p>
							</div>
						</div>
						<div className="col-lg-4 v-center order1">
							<div className="image-block1">
								<img
									src="/images/Biz Success/Deployment.png"
									alt="Process"
									className="img-fluid"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		<Footer />
	</>
	);
};

export default ViewProcess;
