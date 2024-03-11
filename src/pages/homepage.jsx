import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDiscord,
	faInstagram,
	faGithub,
	faSpotify,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";
import Competitions from "../components/homepage/competitions"
import AllProjects from "../components/projects/allProjects";

import "./styles/homepage.css";

const Homepage = () => {

	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScroll = () => {
		const position = window.scrollY || window.pageYOffSet;
		setScrollPosition(position);
	};
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const logoStyle = {
		display: "flex",
		position: "fixed",
		top: `${Math.min(10+scrollPosition * 0.01, 10)}vh`,
		zIndex: 999,
		border: "1px solid white",
		borderRadius: "50%",
		boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
		transform: `scale(${Math.max(1 - scrollPosition * 0.001, 0.5)})`,
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>Brian's Portfolio Website</title>
			</Helmet>

			<div className="page-content">
				<NavBar active="home"/>
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={80} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									Aspiring Game Developer & Programmer
								</div>

								<div className="subtitle homepage-subtitle">
									Hi! My name is Brian, otherwise known as "Harper" online. You may know me as the video game developer for Project Agile on Roblox, but I work on other projects as well! I'm currently a junior in high school, and plan on going to university after my senior year.
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="ghibli.png"
											alt="About me!"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href={"https://discord.gg/UVjqd99xRe"}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faDiscord}
									className="homepage-social-icon"
								/>
							</a>

							<a
								href={"https://www.instagram.com/brianwanggg/"}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="homepage-social-icon"
								/>
							</a>

							<a
								href={"https://www.youtube.com/channel/UCHrMegKX6Hd7jmEDjNHt9ow"}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faYoutube}
									className="homepage-social-icon"
								/>
							</a>

							<a
								href={"https://github.com/88BrianW"}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>

							<a
								href={"https://open.spotify.com/user/k0shv47zkv7sz6kuza7w2uifo?si=039c298c29484c47"}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faSpotify}
									className="homepage-social-icon"
								/>
							</a>


							<a
								href={`mailto:${"88brianw@gmail.com"}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>

						<div className="homepage-projects">
							<AllProjects />
						</div>

						<div className="homepage-after-title">

							<div className="homepage-works">
								<Competitions />
							</div>

							<div></div>
							<div className="homepage-works">
								<Works />
							</div>

							

						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
