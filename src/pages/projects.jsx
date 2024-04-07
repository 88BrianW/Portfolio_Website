import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<Helmet>
				<title>Brian's Projects</title>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							7 of my Passion Projects
						</div>

						<div className="subtitle projects-subtitle">
							As a high schooler, I haven't had the time necessary to create all the projects that I've aspired to make. However, with the given time that I do have, I decided to focus my passions on the field of Computer Science, whether it be a video game, a data science project, or a mobile app. While I adventure through the universe of programming, more and more projects will be added. The projects listed are truly what I've poured my heart and soul into, starting from the most beginner skill level to now, an advanced skill level. I hope you enjoy looking at them.
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
