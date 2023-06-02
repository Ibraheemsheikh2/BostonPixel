import Header from "@/components/Header";
import SEO from "@/components/SEO";
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
			<SEO title="View Process" description="From Idea to Interface: Boston Pixel's Path to Website Perfection" />
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
									From Idea to Interface: Boston Pixel&apos;s
									Path to Website Perfection
								</h1>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="service-block pad-tb light-dark">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="common-heading ptag">
								<span>Process</span>
								<h2>Our App Development Process</h2>
								<p>
									Our design process follows a proven
									approach. We begin with a deep understanding
									of your needs and create a planning
									template.
								</p>
							</div>
						</div>
					</div>
					<div className="row upset justify-content-center mt60">
						<div className="col-lg-4 v-center order1">
							<div className="image-block1">
								<img
									src="https://separateweb.com/niwax-template/images/process/process-1.jpg"
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
									Donec metus lorem, vulputate at sapien sit
									amet, auctor iaculis lorem. In vel hendrerit
									nisi. Vestibulum eget risus velit. Aliquam
									tristique libero at dui sodales, et placerat
									orci lobortis. Maecenas ipsum neque,
									elementum id dignissim et, imperdiet vitae
									mauris.
								</p>
							</div>
						</div>
					</div>
					<div className="row upset justify-content-center mt60">
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>2</span>
								<h3>Prototype</h3>
								<p>
									Donec metus lorem, vulputate at sapien sit
									amet, auctor iaculis lorem. In vel hendrerit
									nisi. Vestibulum eget risus velit. Aliquam
									tristique libero at dui sodales, et placerat
									orci lobortis. Maecenas ipsum neque,
									elementum id dignissim et, imperdiet vitae
									mauris.
								</p>
							</div>
						</div>
						<div className="col-lg-4 v-center order1">
							<div className="image-block1">
								<img
									src="https://separateweb.com/niwax-template/images/process/process-2.jpg"
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
									src="https://separateweb.com/niwax-template/images/process/process-3.jpg"
									alt="Process"
									className="img-fluid"
								/>
							</div>
						</div>
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>3</span>
								<h3>Deployment</h3>
								<p>
									Donec metus lorem, vulputate at sapien sit
									amet, auctor iaculis lorem. In vel hendrerit
									nisi. Vestibulum eget risus velit. Aliquam
									tristique libero at dui sodales, et placerat
									orci lobortis. Maecenas ipsum neque,
									elementum id dignissim et, imperdiet vitae
									mauris.
								</p>
							</div>
						</div>
					</div>
					<div className="row upset justify-content-center mt60">
						<div className="col-lg-7 v-center order2">
							<div className="ps-block">
								<span>4</span>
								<h3>Support &amp; Maintenance</h3>
								<p>
									Donec metus lorem, vulputate at sapien sit
									amet, auctor iaculis lorem. In vel hendrerit
									nisi. Vestibulum eget risus velit. Aliquam
									tristique libero at dui sodales, et placerat
									orci lobortis. Maecenas ipsum neque,
									elementum id dignissim et, imperdiet vitae
									mauris.
								</p>
							</div>
						</div>
						<div className="col-lg-4 v-center order1">
							<div className="image-block1">
								<img
									src="https://separateweb.com/niwax-template/images/process/process-4.jpg"
									alt="Process"
									className="img-fluid"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ViewProcess;
