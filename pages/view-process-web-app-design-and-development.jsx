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
			<SEO title="Web App Design and Development Process" description="Streamlined Process for Development of Web Apps." />
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
									Our Web App Design and Development Process
									
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
									src="/images/Web App/Requirements.png"
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
								At the heart of every successful web app lies a thorough understanding of the requirements. 
								In this crucial phase, our team collaborates closely with you to gather detailed insights into your business goals, target audience, and 
								desired functionalities. We conduct comprehensive discussions and interviews to ensure that we have a crystal-clear understanding of your vision.
								</p>
							</div>
						</div>
					</div>
					<div className="row upset justify-content-center mt60">
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>2</span>
								<h3>Designing Web App on Figma:</h3>
								<p>
								Once we have gathered all the requirements, our skilled design team takes over to give shape to your vision. 
								We employ Figma, a powerful design tool, to create stunning and intuitive user interfaces UI and captivating user experiences UX. 
								By leveraging Figma&apos;s collaborative features, we keep you involved throughout the design process, ensuring that we capture your preferences and incorporate your feedback seamlessly.
								</p>
							</div>
						</div> cv 
						<div className="col-lg-4 v-center order1">
							<div className="image-block1">
								<img
									src="/images/Web App/Web App Design.png"
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
									src="/images/Web App/Front End.png"
									alt="Process"
									className="img-fluid"
								/>
							</div>
						</div>
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>3</span>
								<h3>Front End Development: Conversion of Designed Screens into Coded Screens</h3>
								<p>
								With the finalized designs in hand, our front-end development experts transform them into functional coded screens. 
								They utilize the latest front-end technologies, such as HTML, CSS, and JavaScript, to breathe life into the UI/UX designs. 
								By meticulously coding every element and ensuring cross-browser compatibility, responsiveness, and accessibility, our developers create a 
								seamless user experience across various devices and platforms.
								</p>
							</div>
						</div>
					</div>
					<div className="row upset justify-content-center mt60">
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>4</span>
								<h3>Backend Development and Testing</h3>
								<p>
								While the front-end development focuses on what users see and interact with, the backend development is responsible for handling data processing, 
								server-side logic, and integrations. Our experienced backend developers work diligently to build a robust and scalable architecture that powers your 
								web app. They leverage technologies like Node.js, Python, or PHP to create efficient server-side code that interacts with databases, third-party APIs,
								 and other systems. To ensure the quality and reliability of the backend, thorough testing is performed at every stage. Our team rigorously checks for
								  performance, security, and functionality, fixing any issues before moving forward.

								</p>
							</div>
						</div>
						<div className="col-lg-4 v-center order1">
							<div className="image-block1">
								<img
									src="/images/Web App/Backend Development.png"
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
									src="/images/Web App/Deployment.png"
									alt="Process"
									className="img-fluid"
								/>
							</div>
						</div>
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>5</span>
								<h3>Web App Deployment</h3>
								<p>
								The culmination of our efforts is the deployment of your web app, making it accessible to your target audience. Our deployment process involves 
								careful configuration and optimization of servers and infrastructure to ensure a seamless user experience. We follow best practices to secure your
								web app and implement proper monitoring and logging mechanisms to detect and resolve any potential issues proactively. 
								Once deployed, we conduct extensive testing to verify that the app functions flawlessly in the live environment. 
								Our team provides ongoing support and maintenance, ensuring that your web app continues to perform optimally and meets evolving user needs.
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
