import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import React from "react";
import { useEffect } from "react";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;

const BlogDetail = () => {
	useEffect(() => {
		new WOW.WOW().init();
	}, []);
	return (
		<>
			<SEO title={"Blog"} description={"Blog"} />
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
									Blog Detail
								</h1>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*Start Blog Details*/}
			<section className="blog-page pad-tb">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<div className="blog-header">
								<h1>
									Website – The quickest way to take your
									business online
								</h1>
								<div className="row mt20 mb20">
									<div className="col-md-8 col-9">
										<div className="media">
											<div className="user-image bdr-radius">
												<img
													src="images/user-thumb/girl.jpg"
													alt="girl"
													className="img-fluid"
												/>
											</div>
											<div className="media-body user-info">
												<h5>By John Doe</h5>
												<p>January 10, 2020</p>
											</div>
										</div>
									</div>
									<div className="col-md-4 col-3">
										<div className="postwatch">
											<i className="far fa-eye" /> 120
										</div>
									</div>
								</div>
							</div>
							<div className="image-set">
								<img
									src="images/blog/blog-post-1.jpg"
									alt="blog images"
									className="img-fluid"
								/>
							</div>
							<div className="blog-content mt30">
								<p>
									Lorem Ipsum is simply dummy text of the{" "}
									<strong>
										printing and typesetting industry.
									</strong>{" "}
									Lorem Ipsum has been the industry’s standard
									dummy text ever since the 1500s, when an
									unknown printer took a galley of type and
									scrambled it to make a type specimen book.
									It has survived not only five centuries, but
									also the leap into electronic typesetting,
									remaining essentially unchanged. It was
									popularised in the 1960s with the release of
									Letraset sheets containing Lorem Ipsum
									passages, and more recently with desktop
									publishing software like Aldus PageMaker
									including versions of Lorem Ipsum.
								</p>
								<h3 className="mt30 mb20">
									Website – The quickest way to take your
									business online
								</h3>
								<p>
									Lorem Ipsum is simply dummy text of the{" "}
									<strong>
										printing and typesetting industry.
									</strong>{" "}
									Lorem Ipsum has been the industry’s standard
									dummy text ever since the 1500s, when an
									unknown printer took a galley of type and
									scrambled it to make a type specimen book.
									It has survived not only five centuries, but
									also the leap into electronic typesetting,
									remaining essentially unchanged. It was
									popularised in the 1960s with the release of
									Letraset sheets containing Lorem Ipsum
									passages, and more recently with desktop
									publishing software like Aldus PageMaker
									including versions of Lorem Ipsum.
								</p>
								<h3 className="mt30 mb20">
									So, what is a website?
								</h3>
								<p>
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry’s standard dummy
									text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled
									it to make a type specimen book.
								</p>
								<div className="image-set mt20 mb20">
									<img
										src="images/blog/blog-post-2.jpg"
										alt="blog images"
										className="img-fluid"
									/>
								</div>
								<h3 className="mt30 mb20">
									Essential Features of a Good Website
								</h3>
								<p>
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry’s standard dummy
									text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled
									it to make a type specimen book. It has
									survived not only five centuries, but also
									the leap into electronic typesetting,
									remaining essentially unchanged. It was
									popularised in the 1960s with the release of
									Letraset sheets containing Lorem Ipsum
									passages, and more recently with desktop
									publishing software like Aldus PageMaker
									including versions of Lorem Ipsum.
								</p>
								<h3 className="mt30 mb20">
									Must-Have Features for Local Business
									Websites
								</h3>
								<ul className="ul-list mb30">
									<li>A Logical Roadmap</li>
									<li>Crucial Business Information</li>
									<li>Social Media Integration</li>
									<li>A Mobile-Ready Version</li>
									<li>Heading and tagline or USP</li>
									<li>Testimonials and social proof</li>
									<li>
										Optimise website speed and performance
									</li>
									<li>
										Contact Information and Clear Navigation
									</li>
									<li>
										Ability to easily update title tag and
										meta description
									</li>
								</ul>
								<div className="row">
									<div className="col-lg-6">
										<div className="image-set mt20 mb20">
											<img
												src="images/blog/blog-1.jpg"
												alt="blog images"
												className="img-fluid"
											/>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="image-set mt20 mb20">
											<img
												src="images/blog/blog-2.jpg"
												alt="blog images"
												className="img-fluid"
											/>
										</div>
									</div>
								</div>
								<h3 className="mt30 mb20">
									Increased Local Exposure
								</h3>
								<p>
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry’s standard dummy
									text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled
									it to make a type specimen book. It has
									survived not only five centuries, but also
									the leap into electronic typesetting,
									remaining essentially unchanged. It was
									popularised in the 1960s with the release of
									Letraset sheets containing Lorem Ipsum
									passages, and more recently with desktop
									publishing software like Aldus PageMaker
									including versions of Lorem Ipsum.
								</p>
								<blockquote className="rd-quote">
									“Nunc sed mattis diam. Suspendisse mi
									libero, sagittis nec varius quis, pulvinar
									eu nisl. Nulla in accumsan orci, a varius
									velit. Maecenas tincidunt mauris rutrum,
									eleifend sem at, sollicitudin ante.”
								</blockquote>
								<h3 className="mt30 mb20">Conclusion</h3>
								<p>
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry. Lorem
									Ipsum has been the industry’s standard dummy
									text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled
									it to make a type specimen book.
								</p>
								<div className="row">
									<div className="col-lg-8 col-md-8 mt30 mb30">
										<div className="blog-post-tag">
											<span>Releted Tags</span>
											<a href="#">Web Design</a>
											<a href="#">Marketing</a>
											<a href="#">SEO</a>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 mt30 mb30">
										<div className="blog-share-icon text-left text-md-right">
											<span>Share: </span>
											<a href="#">
												<i className="fab fa-facebook-f" />
											</a>
											<a href="#">
												<i className="fab fa-twitter" />
											</a>
											<a href="#">
												<i className="fab fa-instagram" />
											</a>
											<a href="#">
												<i className="fab fa-google-plus-g" />
											</a>
											<a href="#">
												<i className="fab fa-vimeo-v" />
											</a>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-6 col-md-6 mt30 mb30">
										<div className="post-navigation text-left ">
											<span>
												<a href="#">Prev Post</a>
											</span>
											<h4>
												<a href="#">
													Stock Market App Development
													- Time, Cost, Features
												</a>
											</h4>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 mt30 mb30">
										<div className="post-navigation text-left text-md-right">
											<span>
												<a href="#">Next Post</a>
											</span>
											<h4>
												<a href="#">
													How digital transformation
													has changed the world.
												</a>
											</h4>
										</div>
									</div>
								</div>
							</div>
							<div className="author-block">
								<div className="media">
									<div className="user-image">
										<img
											src="images/user-thumb/girl.jpg"
											alt="girl"
											className="img-fluid"
										/>
									</div>
									<div className="media-body user-info">
										<h5 className="mb10">Sasa Smile</h5>
										<p>
											Cras sit amet nibh libero, in
											gravida nulla. Nulla vel metus
											scelerisque ante sollicitudin. Cras
											purus odio, vestibulum in vulputate
											at, tempus viverra turpis. Fusce
											condimentum nunc ac nisi vulputate
											fringilla. Donec lacinia congue
											felis in faucibus.
										</p>
									</div>
								</div>
							</div>
							<div className="comments-block mt60">
								<h2 className="mb60">Comments:</h2>
								<div className="media">
									<div className="user-image">
										<img
											src="images/user-thumb/user3.jpg"
											alt="girl"
											className="img-fluid"
										/>
									</div>
									<div className="media-body user-info">
										<h5 className="mb10">
											Petey Cruiser <small>says:</small>
											<span>
												November 29, 2019{" "}
												<a
													className="reply-btn"
													href="#"
												>
													<i className="fas fa-reply" />
												</a>
											</span>
										</h5>
										<p>
											Lorem Ipsum is simply dummy text of
											the printing and typesetting
											industry. Lorem Ipsum has been the
											industry’s standard dummy text ever
											since the 1500.
										</p>
									</div>
								</div>
								<div className="media replied">
									<div className="user-image">
										<img
											src="images/user-thumb/user3.jpg"
											alt="girl"
											className="img-fluid"
										/>
									</div>
									<div className="media-body user-info">
										<h5 className="mb10">
											Petey Cruiser <small>says:</small>
											<span>
												November 29, 2019{" "}
												<a
													className="reply-btn"
													href="#"
												>
													<i className="fas fa-reply" />
												</a>
											</span>
										</h5>
										<p>
											Lorem Ipsum is simply dummy text of
											the printing and typesetting
											industry. Lorem Ipsum has been the
											industry’s standard dummy text ever.
										</p>
									</div>
								</div>
								<div className="media">
									<div className="user-image bdr-radius">
										<img
											src="images/user-thumb/user3.jpg"
											alt="girl"
											className="img-fluid"
										/>
									</div>
									<div className="media-body user-info">
										<h5 className="mb10">
											Petey Cruiser <small>says:</small>
											<span>
												May 25, 2020{" "}
												<a
													className="reply-btn"
													href="#"
												>
													<i className="fas fa-reply" />
												</a>
											</span>
										</h5>
										<p>
											{" "}
											Lorem Ipsum is simply dummy text of
											the printing and typesetting
											industry. Lorem Ipsum has been the
											industry’s standard dummy text ever
											since the 1500s, when an unknown
											printer took a galley.
										</p>
									</div>
								</div>
								<div className="form-block form-blog mt60">
									<form action="#" method="post" name="#">
										<div className="fieldsets row">
											<div className="col-md-6">
												<input
													type="text"
													placeholder="Name"
													name="#"
												/>
											</div>
											<div className="col-md-6">
												<input
													type="email"
													placeholder="Email"
													name="#"
												/>
											</div>
										</div>
										<div className="fieldsets row">
											<div className="col-md-12">
												<input
													type="text"
													placeholder="Website"
													name="#"
												/>
											</div>
										</div>
										<div className="fieldsets">
											<textarea
												placeholder="Write Your Comment"
												name="#"
												defaultValue={""}
											/>
										</div>
										<div className="fieldsets mt10">
											<button
												type="submit"
												name="#"
												className="btn-main bg-btn2 text-decoration-none"
											>
												Submit{" "}
												<i className="fas fa-chevron-right fa-icon" />
												<span className="circle" />
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
						{/*End Blog Details*/}
						{/*Start Sidebar*/}
						<div className="col-lg-4">
							<div className="sidebar">
								{/*Start block for offer/ads*/}
								<div className="offer-image">
									<img
										src="images/blog/strategy-guide.jpg"
										alt="offer"
										className="img-fluid"
									/>
								</div>
								{/*End block for offer/ads*/}
								{/*Start Recent post*/}
								<div className="recent-post widgets mt60">
									<h3 className="mb30">Recent post</h3>
									<div className="media">
										<div className="post-image bdr-radius">
											<a href="#">
												<img
													src="images/blog/blog-small.jpg"
													alt="girl"
													className="img-fluid"
												/>
											</a>
										</div>
										<div className="media-body post-info">
											<h5>
												<a href="#">
													Stock Market App Development
													- Time, Cost, Features
												</a>
											</h5>
											<p>September 24, 2019</p>
										</div>
									</div>
									<div className="media">
										<div className="post-image bdr-radius">
											<a href="#">
												<img
													src="images/blog/blog-small2.jpg"
													alt="girl"
													className="img-fluid"
												/>
											</a>
										</div>
										<div className="media-body post-info">
											<h5>
												<a href="#">
													Stock Market App Development
													- Time, Cost, Features
												</a>
											</h5>
											<p>September 24, 2019</p>
										</div>
									</div>
									<div className="media">
										<div className="post-image bdr-radius">
											<a href="#">
												<img
													src="images/blog/blog-small.jpg"
													alt="girl"
													className="img-fluid"
												/>
											</a>
										</div>
										<div className="media-body post-info">
											<h5>
												<a href="#">
													Stock Market App Development
													- Time, Cost, Features
												</a>
											</h5>
											<p>September 24, 2019</p>
										</div>
									</div>
								</div>
								{/*Start Recent post*/}
								{/*Start Blog Category*/}
								<div className="recent-post widgets mt60">
									<h3 className="mb30">Blog Category</h3>
									<div className="blog-categories">
										<ul>
											<li>
												<a href="#">
													Business{" "}
													<span className="categories-number">
														(2)
													</span>
												</a>
											</li>
											<li>
												<a href="#">
													Financial{" "}
													<span className="categories-number">
														(3)
													</span>
												</a>
											</li>
											<li>
												<a href="#">
													Uncategorized{" "}
													<span className="categories-number">
														(4)
													</span>
												</a>
											</li>
											<li>
												<a href="#">
													Web Design{" "}
													<span className="categories-number">
														(3)
													</span>
												</a>
											</li>
											<li>
												<a href="#">
													WordPress{" "}
													<span className="categories-number">
														(5)
													</span>
												</a>
											</li>
										</ul>
									</div>
								</div>
								{/*End Blog Category*/}
								{/*Start Tags*/}
								<div className="recent-post widgets mt60">
									<h3 className="mb30">Most Used Tags</h3>
									<div className="tabs">
										<a href="#">webdesign</a>
										<a href="#">design </a>
										<a href="#">graphicdesign </a>
										<a href="#">website </a>
										<a href="#">marketing </a>
										<a href="#">branding </a>
										<a href="#">webdevelopment </a>
										<a href="#">webdesigner </a>
										<a href="#">graphicdesign </a>
										<a href="#">website </a>
										<a href="#">marketing </a>
										<a href="#">branding </a>
									</div>
								</div>
								{/*End Tags*/}
								{/*Start block for offer/ads*/}
								<div className="offer-image mt60">
									<img
										src="images/blog/sidebar-image.jpg"
										alt="offer"
										className="img-fluid"
									/>
								</div>
								{/*End block for offer/ads*/}
							</div>
						</div>
						{/*End Sidebar*/}
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default BlogDetail;
