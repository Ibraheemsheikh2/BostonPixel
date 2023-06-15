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
			<SEO title="Mobile App Development Process" description="Streamlined Process for Mobile Apps Development using Hybrid/NAtive Frameworks." />
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
									Our Mobile App Design and Development Process
									
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
									src="/images/View Process Mobile App/Mobile-App-Requirement.png"
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
									We get on a call with you to discuss base level things with simple questions related to your app.
									Once we finish the call, we create a Google Document and streamline the requirements with you. We try to gather and 
									formalize requirements during this Step.
								</p>
							</div>
						</div>
					</div>
					<div className="row upset justify-content-center mt60">
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>2</span>
								<h3>Designing Mobile App on Figma</h3>
								<p>
								Once the requirements are gathered, the next step is to design the app&apos;s user interface UI and user experience UX. 
								Figma, a popular design tool, provides a collaborative platform where designers can create wireframes, mockups, and interactive prototypes.
								 The design phase involves creating visually appealing and intuitive screens, selecting appropriate color schemes, typography, and icons, 
								 and arranging the elements in a way that enhances usability and engagement.
								</p>
							</div>
						</div> cv 
						<div className="col-lg-4 v-center order1">
							<div className="image-block1">
								<img
									src="/images/View Process Mobile App/Design-Mobile-App.png"
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
									src="/images/View Process Mobile App/Front-End-Development.png"
									alt="Process"
									className="img-fluid"
								/>
							</div>
						</div>
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>3</span>
								<h3>Front End Development : Conversion of Designed Screens into Coded Screens</h3>
								<p>

								After the design phase, the development team starts working on the front end of the mobile app. 
								This involves converting the designed screens from Figma into actual code using programming languages such Flutter, React Native, Java Kotlin, Swift.
								The front end development focuses on implementing the visual elements, animations, and interactive components as per the design specifications. 
								It also involves ensuring responsiveness, so the app can adapt seamlessly to different screen sizes and devices.

								</p>
							</div>
						</div>
					</div>
					<div className="row upset justify-content-center mt60">
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>4</span>
								<h3> Backend Development and Testing </h3>
								<p>
								While the front end development is in progress, the backend development team starts working on the server-side components of the mobile app. 
								This includes setting up databases, creating APIs Application Programming Interfaces for data communication, and implementing server-side logic. 
								The backend development ensures that the app can handle user authentication, data storage, retrieval, and any other necessary functionalities. 
								Rigorous testing is performed throughout the development process to identify and fix any bugs or issues to ensure a stable and reliable app.
								</p>
							</div>
						</div>
						<div className="col-lg-4 v-center order1">
							<div className="image-block1">
								<img
									src="/images/View Process Mobile App/Backend Development.png"
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
									src="/images/View Process Mobile App/App-Store-Deployment.png"
									alt="Process"
									className="img-fluid"
								/>
							</div>
						</div>
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>5</span>
								<h3>App Deployment on App Store and Play Store</h3>
								<p>
								Once the app development and testing are complete, the final step is to deploy the app on the respective app stores, such as the Apple App Store and Google Play Store. 
								This involves creating developer accounts, preparing the app&apos;s metadata, generating necessary certificates, and adhering to the submission guidelines of the app stores.

								The deployment process also includes app store optimization ASO techniques to improve the app&apos;s visibility and discoverability. Once the app is approved, 
								it becomes available for users to download and enjoy on their devices.
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
