import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;


const TeamMembers = () => {
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
									Who are we?
								</h1>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="team bg-gradient99 pad-tb">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="common-heading ptag">
								
								<h2>Our Managing Director</h2>
							</div>
						</div>
					</div>
					<div className="row justify-content-center">
							<div className="col-lg-4 col-sm-6 px-5">
								<div className="mt-5 hover-scale text-center">
									<Link href="/ibrahim-detail">
										<div >  {/* remove class image-div */}
											<img
												src="/images/pics/ibrahim 1.png"
												alt="team"
												className="img-fluid rounded-circle"
											/>
										</div>
									</Link>
									<div className="info-text-block">
										<h4>Ibrahim</h4>
										<p>CEO</p>
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

export default TeamMembers;
