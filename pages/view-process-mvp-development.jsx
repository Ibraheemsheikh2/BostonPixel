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
			<SEO title="Minimum Viable Product Development" description="Streamlined process for MVP Development." />
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
									Our MVP Development Process
									
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
									src="/images/MVP Development/Design Mobile App.png"
									alt="Process"
									className="img-fluid"
								/>
							</div>
						</div>
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>1</span>
								<h3>Designing the MVP on Figma</h3>
								<p>
									We get on a call with you to discuss base level things with simple questions related to your business or startup.
									Once we finish the call, we create a base level document with requirements and start developing designs on Figma or Adobe xD.
								</p>
							</div>
						</div>
					</div>
					<div className="row upset justify-content-center mt60">
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>2</span>
								<h3>Front End Development</h3>
								<p>
								During the second stage, we convert the designed screens into coded screens using a particular tech stack. 
								The team gets to test the product either on Web or Apple Test Flight in case of Mobile Application.
								</p>
							</div>
						</div> cv 
						<div className="col-lg-4 v-center order1">
							<div className="image-block1">
								<img
									src="/images/MVP Development/Front End.png"
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
									src="/images/MVP Development/Backend Development.png"
									alt="Process"
									className="img-fluid"
								/>
							</div>
						</div>
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>3</span>
								<h3>Backend Development</h3>
								<p>
								The team starts the Backend Development during this phase. Once the Backend is developed, our team integrates the API&apos;s into front end, allowing the
								product to work as per the business rules.
								</p>
							</div>
						</div>
					</div>
					<div className="row upset justify-content-center mt60">
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>4</span>
								<h3> Review, Refinements and Deployment</h3>
								<p>
									We send the application to your end for your review. Once you share your feedback on the development, we make improvements, remove bugs and send it back to you 
									for review again. This process stays in loop, until we achieve the highest standard of Development.
									Afterwards, we deploy the application for users to start using it!

								</p>
							</div>
						</div>
						<div className="col-lg-4 v-center order1">
							<div className="image-block1">
								<img
									src="https://separateweb.com/niwax-template/images/process/process-4.jpg"
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
