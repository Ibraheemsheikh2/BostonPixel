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
			<SEO title="UI/UX Design Process" description="Design process which lets you have your project designed according to your requirements." />
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
									Our UI/UX Development & Prototyping Process
									
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
									src="https://separateweb.com/niwax-template/images/process/process-1.jpg"
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
									We get on a call with you to discuss base level things with simple questions related to your business or startup.
									Once we finish the call, we create a Google Document and share it in a detailed manner with you. We try to gather and 
									formalize requirements during this Step.
								</p>
							</div>
						</div>
					</div>
					<div className="row upset justify-content-center mt60">
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>2</span>
								<h3>User Persona Development</h3>
								<p>
								During the second stage, we develop user personas which are fictional representations of our target audience. It helps us in understanding their needs, behaviors, and goals. 
								By creating detailed user personas, we gain valuable insights that drive the design and development of user-centered experiences.
								</p>
							</div>
						</div> cv 
						<div className="col-lg-4 v-center order1">
							<div className="image-block1">
								<img
									src="/images/UI UX/User Persona.png"
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
									src="https://separateweb.com/niwax-template/images/process/process-3.jpg"
									alt="Process"
									className="img-fluid"
								/>
							</div>
						</div>
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>3</span>
								<h3>Sketches to Prototype</h3>
								<p>
								During this step, our team of designers join together to make different approaches for the design with the help of sketches.
Once the team builds up a consensus, they move forward with the actual design on Figma, where the team creates a digital representation of a user interface UI or user experience UX concept.
</p>
							</div>
						</div>
					</div>
					<div className="row upset justify-content-center mt60">
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>4</span>
								<h3> Review and Refinements</h3>
								<p>
									We send the designed prototypes to your end for your review. Once you share your feedback on the design, we make improvements
									over the design and send it back to you for review again. This process stays in loop, until we achieve the highest standard of design
									which satisfies your design requirements and the friendliness of the experience!

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
