import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import { services } from "@/data/home";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;

const Services = () => {
	useEffect(() => {
		new WOW.WOW().init();
	}, []);
	return (
		<>
			<SEO title="Services" description="Services" />
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
									Our Services
								</h1>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="service-block bg-gradient6 pad-tb">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div className="common-heading ptag">
								<h2>{services.title}</h2>
								<p className="mb30">{services.description}</p>
							</div>
						</div>
					</div>
					<div className="row upset link-hover">
						{services.services.map((service, index) => (
							<div
								key={index}
								className="col-lg-4 col-sm-6 mt30 wow fadeInUp"
								data-wow-delay=".2s"
							>
								<div className="s-block">
									<div className="s-card-icon">
										<img
											src={service.image}
											alt="service"
											className="img-fluid"
										/>
									</div>
									<h4>{service.title}</h4>
									<p>{service.description}</p>
									<Link
										href={`/view-process-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
										className="btn-main bg-btn2 text-decoration-none text-white w-50"
									>
										View Process
										<i className="fas fa-chevron-right fa-icon" />
										<span className="circle" />
									</Link>
								</div>
							</div>
						))}
					</div>
					<div className="-cta-btn mt70">
					<div
							className="free-cta-title v-center wow zoomInDown"
							data-wow-delay="1.3s"
						>
							<Link
								href="/portfolio"
								className="btn-main bg-btn2 text-decoration-none "
							>
								View Portfolio
								<i className="fas fa-chevron-right fa-icon" />
								<span className="circle" />
							</Link>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Services;
