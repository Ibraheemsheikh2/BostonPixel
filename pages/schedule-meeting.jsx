import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import React from "react";
import { InlineWidget } from "react-calendly";
import { useEffect } from "react";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;


const SheduleMeeting = () => {
	useEffect(() => {
		new WOW.WOW().init();
	}, []);
	return (
		<>
			<Header />
			<SEO title="Schedule a Meeting" description="Schedule a Meeting" />
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
									Schedule a Meeting
								</h1>
							</div>
						</div>
					</div>
				</div>
			</section>
			<InlineWidget url="https://calendly.com/ibraheemsheikh2/project-discussion" />
			<Footer />
		</>
	);
};

export default SheduleMeeting;
