import Header from "@/components/Header";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { hero, projects, services, skills, teamMembers } from "@/data/home";
import { useEffect } from "react";

const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;

const slicedServices = services.services.slice(0, 6);

export default function Home() {
	useEffect(() => {
		new WOW.WOW().init();
	}, []);
	return (
		<>
			<SEO title="Boston Pixel" description={hero.intro} />
			<Header>
			<meta name="google-site-verification" content="B96IhGAyc0BD3uICItCsz1CvgS-2Qc-_4fk3wLyo9UM" />
			 	
			</Header>
			<section className="hero-section fl-hero">
				<div className="text-block">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 v-center">
								<div className="header-heading">
									<span
										className="title- wow fadeInUp"
										data-wow-delay=".1s"
									>
										{hero.greeting}
									</span>
									<h1
										className="wow fadeInUp"
										data-wow-delay=".2s"
									>
										From Concept to <span>Launch</span>,
										Your Trusted Partner in Developing
										Mobile and Web Apps!
										
									</h1>
									<p
										className="wow fadeInUp"
										data-wow-delay=".4s"
									>
										{hero.intro}
									</p>
									<Link
										href={hero.buttonLink}
										className="btn-main bg-btn2 text-decoration-none"
										data-wow-delay=".6s"
									>
										{hero.buttonText}
									</Link>
								</div>
							</div>
							<div
								className="col-lg-6 wow fadeIn right-img"
								data-wow-delay=".4s"
							>
								<div className="single-image d-flex justify-content-center">
									<img
										src={hero.image}
										width={700}
										height={830}
										alt="service"
										className="img-fluid mx-auto"
									/>
								</div>
							</div>

						</div>
					</div>
				</div>
			</section>

			<div className="statistics-section bg-white pad-tb tilt3d" id="statsSections">
				<div className="container">
					<div className="row justify-content-center t-ctr">
						<div className="col-lg-4 col-sm-6 mb-4">
							<div className="statistics">
								<div
									data-tilt
									data-tilt-max={20}
									data-tilt-speed={1000}
									className="statistics-img border border-success"
									style={{
										willChange: "transform",
										transform:
											"perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
									}}
								>
									<img
										src="/images/icons/startup.svg"
										alt="years"
										className="img-fluid"
									/>
								</div>
								<div className="statnumb">
									<span className="counter">4</span>
									<span>+</span>
									<p>Year In Business</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-sm-6 mb-4">
							<div className="statistics">
								<div
									data-tilt
									data-tilt-max={20}
									data-tilt-speed={1000}
									className="statistics-img border border-success"
								>
									<img
										src="/images/icons/team.svg"
										alt="team"
										className="img-fluid"
									/>
								</div>
								<div className="statnumb">
									<span className="counter">4</span>
									
									<p>Team Members</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row small t-ctr">
						<div className="col-lg-3 col-sm-6 mb-4">
							<div className="statistics">
								<div
									data-tilt
									data-tilt-max={20}
									data-tilt-speed={1000}
									className="statistics-img border border-success"
								>
									<img
										src="/images/icons/deal.svg"
										alt="happy"
										className="img-fluid"
									/>
								</div>
								<div className="statnumb">
									<span className="counter">34</span>
									<p>Happy Clients</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 mb-4">
							<div className="statistics">
								<div
									data-tilt
									data-tilt-max={20}
									data-tilt-speed={1000}
									className="statistics-img border border-success"
								>
									<img
										src="/images/icons/computers.svg"
										alt="project"
										className="img-fluid"
									/>
								</div>
								<div className="statnumb counter-number">
									<span className="counter">79</span>
									<p>Projects Done</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 mb-4">
							<div className="statistics">
								<div
									data-tilt
									data-tilt-max={20}
									data-tilt-speed={1000}
									className="statistics-img border border-success"
								>
									<img
										src="/images/icons/worker.svg"
										alt="work"
										className="img-fluid"
									/>
								</div>
								<div className="statnumb">
									<span className="counter">25</span>
									<span>k</span>
									<p>Hours Worked</p>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-sm-6 mb-4">
							<div className="statistics mb0">
								<div
									data-tilt
									data-tilt-max={20}
									data-tilt-speed={1000}
									className="statistics-img border border-success"
								>
									<img
										src="/images/icons/customer-service.svg"
										alt="support"
										className="img-fluid"
									/>
								</div>
								<div className="statnumb">
									<span className="counter">24</span>
									<span>/</span>
									<span className="counter">7</span>
									<p>Support Available</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
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
						{slicedServices.map((service, index) => (
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
								href="/services"
								className="btn-main bg-btn2 text-decoration-none "
							>
								View All Services
								<span className="circle" />
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className="portfolio-page pad-tb">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6">
							<div className="common-heading">
								<h2 className="mb0">{projects.title}</h2>
							</div>
						</div>
					</div>
					<div className="row mt60">
						{projects.projects.slice(0, 6).map((project, index) => (
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
					<div className="-cta-btn mt70">
						<div
							className="free-cta-title v-center wow zoomInDown"
							data-wow-delay="1.3s"
						>
							<Link
								href="/portfolio"
								className="btn-main bg-btn2 text-decoration-none "
							>
								View All Projects
								<span className="circle" />
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className="skill-category pad-tb">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="common-heading ptag">
								<span>{skills.intro}</span>
								<h2 style={{color: '#fff'}}>{skills.title}</h2>
								<p>{skills.description}</p>
							</div>
						</div>
					</div>
					<div className="row mt30">
						{skills.skills.map((skill, index) => (
							<div
								className="col-lg-2 col-sm-6 col-6 wow fadeIn"
								data-wow-delay="0.1s"
								key={index}
							>
								<div
									className="industry-workfor hoshd"
									style={{ height: "7rem" }}
								>
									<Icon icon={skill.icon} width={50} />
									<h6>{skill.name}</h6>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className="team pad-tb deep-dark">
    <style>
        {`.team-member {
            margin-bottom: 20px; /* Adjust the value to increase or decrease the gap */
        }`}
    </style>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="common-heading ptag">
                    <span></span>
                    <h2>Faces Behind the Work</h2>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            {teamMembers.members.map((member, index) => (
                <div key={index} className="col-lg-3 col-sm-6 team-member">
                    <div className="full-image-card hover-scale">
                        <div className="image-div">
                            <img
                                src={member.image}
                                alt="team"
                                className="img-fluid"
                            />
                        </div>
                        <div className="info-text-block">
                            <h4>{member.name}</h4>
                            <p>{member.role}</p>
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
}
