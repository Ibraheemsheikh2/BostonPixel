import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
const Header = () => {
	const [navBackground, setNavBackground] = useState(true);
	const navRef = useRef();
	navRef.current = navBackground;
	useEffect(() => {
		const handleScroll = () => {
			const show = window.scrollY < 50;
			if (navRef.current !== show) {
				setNavBackground(show);
			}
		};
		document.addEventListener("scroll", handleScroll);
		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<header className="top-header">
			<Navbar
				className={`navbar-light justify-content-right fixed-top ${
					!navBackground && "bg-light"
				}`}
				expand="lg"
			>
				<Container className="py-2">
					<Navbar.Brand>
						<img
							src="/images/pics/Boston_Pixel-removebg-preview.png"
							alt="Logo"
							width={100}
							height={100}
						/>
					</Navbar.Brand>

					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-lg`}
						aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
						placement="start"
						className="animate slideIn "
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title
								id={`offcanvasNavbarLabel-expand-lg`}
							>
								<Navbar.Brand>
									<img
										src="/images/logo.png"
										alt="Logo"
										width={100}
										height={100}
									/>
								</Navbar.Brand>
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className="ms-auto mb-2 mb-lg-0">
								<Nav.Link as={Link} href="/">
									Home
								</Nav.Link>
								<Nav.Link as={Link} href="/about">
									About
								</Nav.Link>
								<Nav.Link as={Link} href="/services">
									Services
								</Nav.Link>
								<Nav.Link as={Link} href="/portfolio">
									Portfolio
								</Nav.Link>
								<Nav.Link as={Link} href="/blog">
									Blog
								</Nav.Link>
								<Nav.Link as={Link} href="/team-members">
									Team Members
								</Nav.Link>
								<Nav.Link as={Link} href="/career">
									Career
								</Nav.Link>
								<Nav.Link as={Link} href="/contact">
									Contact
								</Nav.Link>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
					<div className="d-flex flex-row ms-3">
						<Navbar.Toggle
							aria-controls={`offcanvasNavbar-expand-lg`}
						/>
						<Link
							className="custom-btn btn-main bg-btn2 text-decoration-none"
							href="/schedule-meeting"
						>
							Schedule Meeting
						</Link>
					</div>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
