import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { projects } from "@/data/home";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;


const Portfolio = () => {
	const [hovered, setHovered] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState("All");
	useEffect(() => {
		new WOW.WOW().init();
	}, []);
	return (
		<>
			<SEO title="Portfolio" description="Portfolio" />
			<Header />
			<section className="breadcrumb-areav2" data-background="/images/banner/8.jpg">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-7">
							<div className="bread-titlev2">
								<h1 className="wow fadeInUp" data-wow-delay=".2s">Portfolio</h1>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="portfolio-page">
				<div className="container" >
					<div className="row mt60">
						<div className="col-lg-12 col-sm-12 wptbb">
							<div className="shadow">
								<div className="portfolio-item-info-tt" style={{ paddingTop: '30px', height: '120px' }}>
									<div className="widebloktag1 widebloktag">
										{projects.categories.map((category, index) => (
											<span
												key={index}
												className={category === selectedCategory ? "active" : ""}
												onClick={() => setSelectedCategory(category)}
											>
												{category}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
						{projects.projects
							.filter(
								(project) =>
									selectedCategory === "All" || project.category === selectedCategory
							)
							.map((project, index) => (
								<div key={index} className="col-lg-12 col-sm-12 wptbb">
									<div className={`pbwide shadow ${project.background}`}>
										<div className="portfolio-item-info-tt">
											<div className="widebloktag">
												{project.tags.map((tag, index) => (
													<span key={index}>{tag}</span>
												))}
											</div>
											<h3 className="mt30 mb30">{project.title}</h3>
											<ul className="info-list-ul">
												{project.features.map((feature, index) => (
													<li key={index}>{feature}</li>
												))}
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
														<a href={project.link} target="_blank" rel="noopener noreferrer">
															<div
																style={{
																	position: 'relative',
																	overflow: 'hidden',
																}}
																onMouseEnter={() => setHovered(true)}
																onMouseLeave={() => setHovered(false)}
															>
																<img
																	src={project.desktopPreview}
																	alt="img"
																	className="img-fluid"
																	style={{ transition: 'transform 0.3s ease' }}
																/>
																<div
																	style={{
																		position: 'absolute',
																		top: '50%',
																		left: '50%',
																		transform: 'translate(-50%, -50%)',
																		backgroundColor: hovered ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.5)', // Change background color on hover
																		color: '#fff',
																		padding: '10px 20px',
																		borderRadius: '5px',
																		textAlign: 'center',
																		cursor: 'pointer',
																		opacity: 1, // Always visible
																		transition: 'background-color 0.3s ease', // Smooth transition for background color
																	}}
																>
																	
																	Click to View
																	<ArrowForwardIcon
																		style={{
																			marginRight: '5px',
																			transition: 'transform 0.3s ease',
																			transform: hovered ? 'rotate(0deg)' : 'rotate(-45deg)', // Rotate icon on hover
																		}}
																	/>
																</div>
															</div>
														</a>
													</div>
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
