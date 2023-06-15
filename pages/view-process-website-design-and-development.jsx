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
			<SEO title="Website Design and Development" description="Website Design and Development Process." />
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
									Our Website Design and Development Process
									
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
									src="/images/Website Design/Requirements.png"
									alt="Process"
									className="img-fluid"
								/>
							</div>
						</div>
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>1</span>
								<h3>Planning and Analysis</h3>
								<p>
									This initial stage involves gathering information and defining the goals and requirements of the website. 
									It includes understanding the target audience, identifying the purpose of the website, and conducting a thorough analysis 
									of the client&apos;s needs and expectations.
								</p>
							</div>
						</div>
					</div>
					<div className="row upset justify-content-center mt60">
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>2</span>
								<h3>Design</h3>
								<p>
								The design process focuses on creating the visual elements and user interface of the website. It starts with wireframing,
								where you sketch out the basic layout and structure of the web pages. Once the wireframes are approved, the next step is to create high-fidelity designs using
								Figma.This includes selecting colors, typography, images, and other visual elements that align with the client&apos;s branding. The design process also involves 
								creating a responsive layout that adapts to different devices and screen sizes.
								</p>
							</div>
						</div> cv 
						<div className="col-lg-4 v-center order1">
							<div className="image-block1">
								<img
									src="/images/Website Design/Website Design.png"
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
									src="/images/Website Design/Website Development.png"
									alt="Process"
									className="img-fluid"
								/>
							</div>
						</div>
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>3</span>
								<h3>Development</h3>
								<p>
								In the Development Process, the website is developed using site builders such as Squarespace, Wordpress, Wix or Webflow.
								We make sure the website is not only fully optimized but also value driven in terms of content!
</p>
							</div>
						</div>
					</div>
					<div className="row upset justify-content-center mt60">
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>4</span>
								<h3> Testing and Launch</h3>
								<p>
								Once the development is complete, the website undergoes thorough testing to identify and fix any bugs, errors, or compatibility issues.
								After the testing phase, the website is deployed to a live server and launched for public access. Ongoing maintenance and updates may be 
								necessary after the launch to keep the website secure and up to date.

								</p>
							</div>
						</div>
						<div className="col-lg-4 v-center order1">
							<div className="image-block1">
								<img
									src="/images/Website Design/Website Testing.png"
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
