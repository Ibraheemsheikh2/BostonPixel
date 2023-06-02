import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import React from "react";
import { useEffect } from "react";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;

const TeamDetail = () => {
	useEffect(() => {
		new WOW.WOW().init();
	}, []);
	return (
		<>
			<SEO title="Team Members" />

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
									Team Detail
								</h1>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="team pad-tb deep-dark">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-5 col-md-5">
							<div className="image-block upset bg-shape">
								<div className="image-div">
									<a href="#">
										<img
											src="/images/pics/Nick.png"
											alt="team"
											className="img-fluid"
										/>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-6">
							<div className="full-image-card mt0">
								<div className="info-text-block">
									<h4>
										<a href="#">Nick</a>
									</h4>
									<p>Company COO</p>
								</div>
								<div className="otherinfo">
									<p>
									Nick LePore is an entrepreneur, sales professional and passionate individual with extensive experience building out & running sales operations within multiple different industries. His role at Boston Pixel is to oversee the day-to-day operations of the business, and to formulate the most effective strategies to acquire new clients and maintain existing ones. With an emphasis and focus on client satisfaction, Nick takes pride in building long-standing relationships with every single individual who chooses to work with Boston Pixel. When Nick&apos;s not working on website design projects, running sales calls or managing marketing operations - he&apos;s most likely attending to his son, a 5-month old maltipoo puppy or binge-watching murder mystery documentaries on Netflix.
									</p>
									<div className="social-media-profile">
										<a
											href="javascript:void(0)"
											target="blank"
										>
											<i className="fab fa-facebook" />
										</a>
										<a
											href="javascript:void(0)"
											target="blank"
										>
											<i className="fab fa-twitter" />
										</a>
										<a
											href="javascript:void(0)"
											target="blank"
										>
											<i className="fab fa-instagram" />
										</a>
										<a
											href="javascript:void(0)"
											target="blank"
										>
											<i className="fab fa-linkedin" />
										</a>
										<a
											href="javascript:void(0)"
											target="blank"
										>
											<i className="fab fa-dribbble" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default TeamDetail;
