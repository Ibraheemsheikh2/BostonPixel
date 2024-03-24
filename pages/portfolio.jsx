import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { projects } from "@/data/home";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;

const Portfolio = () => {
	useEffect(() => {
		new WOW.WOW().init();
	}, []);
	return (
		<>
			<SEO title="Portfolio" description="Portfolio" />
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
									Portfolio
								</h1>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="portfolio-page pad-tb">
				<div className="container">
					<div className="row mt60">
						{projects.projects.map((project, index) => (
							<div
								key={index}
								className="col-lg-12 col-sm-12 wptbb wow fadeInUp"
							>
								<div
									className={`pbwide shadow ${project.background}`}
								>
									<div className="portfolio-item-info-tt">
										<div className="widebloktag">
											{project.tags.map((tag, index) => (
												<span key={index}>{tag}</span>
											))}
										</div>
										<h3 className="mt30 mb30">
											{project.title}
										</h3>
										<ul className="info-list-ul">
											{project.features.map(
												(feature, index) => (
													<li key={index}>
														{feature}
													</li>
												)
											)}
										</ul>
										
									</div>
									<div className="portfolio-wide-image">
										<div className="img-wide-blocktt tilt-outer">
											<div
												className="innerwidedevice tilt-inner"
												data-tilt
												data-tilt-max={4}
												data-tilt-speed={1000}
												data-tilt-perspective={2000}
											>
												<div className="desktopblock shadow1">
													<img
														src={
															project.desktopPreview
														}
														alt="img"
														className="img-fluid"
													/>{" "}
												</div>
												{/* <div className="mobileblock shadow1">
													<img
														src={
															project.mobilePreview
														}
														alt="img"
														className="img-fluid"
													/>{" "}
												</div> */}
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Portfolio;
