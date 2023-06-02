import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;

const Blogs = () => {
	useEffect(() => {
		new WOW.WOW().init();
	}, []);
	return (
		<>
			<SEO title={"Blogs"} description={"Blogs"} />
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
									Blog
								</h1>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="blog-page pad-tb pt40">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 mt60">
							<div className="single-blog-post- shdo">
								<div className="single-blog-img-">
									<img
										src="images/blog/nodejs.jpg"
										alt="girl"
										className="img-fluid"
									/>
									<div className="entry-blog-post dg-bg2 text-white">
										<span className="bypost-">
											<i className="fas fa-tag" /> Nodejs
										</span>
										<span className="posted-on-">
											<i className="fas fa-clock" /> Sep
											23, 2020
										</span>
									</div>
								</div>
								<div className="blog-content-tt">
									<div className="single-blog-info-">
										<h4>
											Everything You Need To Know About
											Nodejs!
										</h4>
									</div>
									<div className="post-social">
										<div className="ss-inline-share-wrapper ss-hover-animation-fade ss-inline-total-counter-left ss-left-inline-content ss-small-icons ss-with-spacing ss-circle-icons ss-without-labels">
											<div className="ss-inline-share-content">
												<div className="ss-social-icons-container">
													<span className="me-3">
														Shares
													</span>
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
														<i className="fab fa-linkedin" />
													</a>
													<a
														href="javascript:void(0)"
														target="blank"
													>
														<i className="fas fa-envelope" />
													</a>
													<a
														href="javascript:void(0)"
														target="blank"
													>
														<i className="fab fa-facebook-messenger" />
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<Link
									href="/blog-detail"
									className="stretched-link"
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

export default Blogs;
