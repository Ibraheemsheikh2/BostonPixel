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
			<SEO title="Consultancy" description="Have us on board to solve problems faced by you!  " />
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
									Our Consultancy Process
									
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
									src="/images/Consultancy/Requirements.png"
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
								The consultancy process begins when you contact us through our website, email, or phone. To streamline the process, we utilize a scheduling tool
								 like Calendly, allowing you to easily book a meeting at your convenience. This ensures a smooth and efficient process for 
								 setting up an initial consultation.
								 </p>
							</div>
						</div>
					</div>
					<div className="row upset justify-content-center mt60">
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>2</span>
								<h3>Needs Assessment and Solution Proposal</h3>
								<p>
								During the initial consultation, we engage in a conversation to understand your specific needs, challenges, and goals. 
								We ask targeted questions and actively listen to gather the necessary information. Based on this assessment, we develop a tailored solution proposal
								that outlines our recommended strategies and deliverables to address your challenges and achieve your goals.

								</p>
							</div>
						</div> cv 
						<div className="col-lg-4 v-center order1">
							<div className="image-block1">
								<img
									src="/images/Consultancy/Needs Assessment.png"
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
									src="/images/Consultancy/Implementation.png"
									alt="Process"
									className="img-fluid"
								/>
							</div>
						</div>
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>3</span>
								<h3>Implementation and Support</h3>
								<p>
								Upon acceptance of the solution proposal, we move forward with implementing the proposed solutions.
								We work closely with you, providing guidance, expertise, and support throughout the implementation process. We prioritize effective communication, regular progress updates, 
								and milestone reviews to ensure that the implementation is on track and aligned with your expectations. Our aim is to deliver high-quality results and assist you in achieving 
								your desired outcomes.
								</p>
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
