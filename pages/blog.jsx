import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SEO from "@/components/SEO";
import Link from "next/link";
import React from "react";

import { useEffect } from "react";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Everything You Need To Know About Nodejs!",
      imageSrc: "images/blog/nodejs.jpg",
      tags: ["Nodejs"],
      date: "Feb 23, 2023",
    },

    {
      id: 2,
      title: "How to Create Product People Want: The Secret of Success.",
      imageSrc: "images/blog/Product Development.png",
      tags: ["Product"],
      date: "Feb 20, 2023",
    },

    {
      id: 3,
      title:
        "Cloud Computing in health Care: Benefits & Challenges",
      imageSrc: "images/blog/Cloud Computing.jpg",
      tags: ["Cloud Computing"],
      date: "Feb 18, 2023",
    },

    {
      id: 4,
      title: "What is Project Discovery Phase, and why does it Matter?",
      imageSrc: "images/blog/Project Discovery.png",
      tags: ["Product Discovery"],
      date: "Feb 13, 2023",
    },

    {
      id: 5,
      title:
        "Monolithic vs Microservices: Choosing the Architecture for your Business App Project.",
      imageSrc: "images/blog/monolithic.png",
      tags: ["Monolithic vs Microservices"],
      date: "Feb 07, 2023",
    },

    {
      id: 6,
      title: "What is a Solution Architect, role of it and why does it matter?",
      imageSrc: "images/blog/solutions architect.png",
      tags: ["Solution Architect"],
      date: "Feb 05, 2023",
    },

    {
      id: 7,
      title:
        "Swift vs React Native: which one is better to choose while developing IOS Application?",
      imageSrc: "images/blog/swift vs react native.png",
      tags: ["Swift vs React Native"],
      date: "Jan 23, 2023",
    },

    {
      id: 8,
      title:
        "What is MVP (Minimum Viable Product) Developemt? Do's and Don'ts!",
      imageSrc: "images/blog/MVP Development.png",
      tags: ["MVP Development"],
      date: "Jan 20, 2023",
    },

    {
      id: 9,
      title: "What is Devops and when do we actudally need it in our startup?",
      imageSrc: "images/blog/Devops.png",
      tags: ["Devops"],
      date: "Jan 10, 2023",
    },

    {
      id: 10,
      title: "Google Clouds Platform vs Microsoft Azure vs Amazon Web Services",
      imageSrc: "images/blog/GCP vs AWS.png",
      tags: ["GCP/AWS/Azure"],
      date: "Jan 2nd, 2023",
    },
  ];

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
                <h1 className="wow fadeInUp" data-wow-delay=".2s">
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
            {blogPosts.map((post) => (
              <div className="col-lg-4 mt60" key={post.id}>
                <div className="single-blog-post- shdo">
                  <div className="single-blog-img-">
                    <img src={post.imageSrc} alt="girl" className="img-fluid" />
                    <div className="entry-blog-post dg-bg2 text-white">
                      <span className="bypost-">
                        <i className="fas fa-tag" /> {post.tags[0]}
                      </span>
                      <span className="posted-on-">
                        <i className="fas fa-clock" /> {post.date}
                      </span>
                    </div>
                  </div>
                  <div className="blog-content-tt">
                    <div className="single-blog-info-">
                      <h4>{post.title}</h4>
                    </div>

                    <Link
                      
                      href={`/[id]`}
                      as={`/${post.id}`}
                      className="btn-main bg-btn2 text-decoration-none text-white w-50"
                    >
                      View Blog
                      
                      <i className="fas fa-chevron-right fa-icon" />
                      <span className="circle" />
                    </Link>
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

export default Blogs;
