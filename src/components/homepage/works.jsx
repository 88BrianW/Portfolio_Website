import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="coding_stem.png"
								alt="Coding Stem!"
								className="work-image"
							/>
							<div className="work-title">Engineer Teacher</div>
							<div className="work-subtitle">
								Video Game Design
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>
						<div className="work">
							<img
								src="coding_stem.png"
								alt="Coding Stem!"
								className="work-image"
							/>
							<div className="work-title">Community Service Volunteer</div>
							<div className="work-subtitle">
								Program, Math, Physics Tutor
							</div>
							<div className="work-duration">2021 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
