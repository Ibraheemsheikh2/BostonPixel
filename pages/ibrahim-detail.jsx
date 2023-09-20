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
											src="/images/pics/ibrahim 1.png"
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
										<a href="#">Ibrahim</a>
									</h4>
									<p>Company CEO</p>
								</div>
								<div className="otherinfo">
									<p>
									 
                                    Hi there!🎉 My name&apos;s Ibraheem and
										I&apos;m someone who had a successful exit
										from a bootstrapped startup. Four years
										ago, I began my journey as a freelance
										mobile app developer, solely driven by
										my passion for technology and a desire
										to see how we can connect the world
										through tech. Since then through hard
										work and determination, I&apos;ve been
										part of over 60 apps on app store and
										play store, and collaborated with 10
										startups.
									</p>
									<div className="social-media-profile">
										<a
											href="https://www.linkedin.com/in/ibraheem-sheikh-b039451a3/"
											target="blank"
										>
											<i className="fab fa-linkedin" />
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
