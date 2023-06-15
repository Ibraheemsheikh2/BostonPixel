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
			<SEO title="Game Development Process" description="5 steps which places us ahead of the curve in Game Development." />
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
									Our Game Development Process
									
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
									src="/images/Game Development/Requirements.png"
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
								Our team collaborates closely with you to gather detailed insights into your game concept, target audience, gameplay mechanics, and desired features. 
								Through comprehensive discussions and brainstorming sessions, we ensure that we capture the essence of your vision and align our expertise with your 
								goals.
								</p>
							</div>
						</div>
					</div>
					<div className="row upset justify-content-center mt60">
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>2</span>
								<h3>Designing Game Mechanics and Artwork</h3>
								<p>
								Once the requirements are clear, our skilled design team takes charge of shaping your game&apos;s mechanics and visual style. 
								We meticulously craft the game mechanics to deliver an engaging and immersive experience, ensuring that it aligns with your vision and 
								resonates with your target audience. Simultaneously, our talented artists bring your game to life by creating captivating visuals, appealing characters
								, and captivating environments.
								</p>
							</div>
						</div> cv 
						<div className="col-lg-4 v-center order1">
							<div className="image-block1">
								<img
									src="/images/Game Development/Design.png"
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
									src="/images/Game Development/Game Development.png"
									alt="Process"
									className="img-fluid"
								/>
							</div>
						</div>
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>3</span>
								<h3>Game Development: Programming and Implementation</h3>
								<p>
								With the game design finalized, our experienced game developers step in to transform the concept into a fully functional game. 
								Leveraging industry-leading game development frameworks such as Unity or Unreal Engine, we meticulously code the game mechanics, 
								implement player interactions, and integrate artwork and audio elements. Our developers possess a deep understanding of game physics, 
								AI programming, and multiplayer functionality to create a rich and immersive gaming experience. 
								</p>
							</div>
						</div>
					</div>
					<div className="row upset justify-content-center mt60">
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>4</span>
								<h3> Testing and Optimization</h3>
								<p>
								To ensure a high-quality gaming experience, rigorous testing is an integral part of our game development process. 
								Our dedicated quality assurance team conducts comprehensive testing, identifying and resolving any bugs, glitches, or performance issues. 
								We perform functionality tests, compatibility tests, and stress tests to ensure that the game performs optimally across various platforms and devices. 
								</p>
							</div>
						</div>
						<div className="col-lg-4 v-center order1">
							<div className="image-block1">
								<img
									src="/images/Game Development/Game Testing.png"
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
									src="/images/Game Development/Game Deployment.png"
									alt="Process"
									className="img-fluid"
								/>
							</div>
						</div>
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>5</span>
								<h3>Game Deployment</h3>
								<p>
								The final step in our game development process is the deployment of your game, making it accessible to players. 
								Our team assists with the deployment process, including setting up distribution platforms, ensuring proper integration with app stores or 
								gaming platforms, and handling any necessary certifications or approvals. We pay special attention to metadata, screenshots, and promotional materials 
								to create a compelling game listing that attracts players. After deployment, we provide ongoing support, monitoring the game&apos;s performance, and 
								addressing any post-launch issues that may arise.
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
