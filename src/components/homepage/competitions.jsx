import React from "react";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faTrophy}
				title="Competitions"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="coding_stem.png"
								alt="Coding Stem!"
								className="work-image"
							/>
							<div className="work-title">United States of America Computing Olympiad</div>
							<div className="work-subtitle">
								Silver Tier Award
							</div>
							<div className="work-duration">2024</div>
						</div>
						<div className="work">
							<img
								src="coding_stem.png"
								alt="Coding Stem!"
								className="work-image"
							/>
							<div className="work-title">American Computer Science League (ACSL)</div>
							<div className="work-duration">2023</div>
						</div>
						<div className="work">
							<img
								src="coding_stem.png"
								alt="Coding Stem!"
								className="work-image"
							/>
							<div className="work-title">CALICO - Berkeley</div>
							<div className="work-duration">2023</div>
						</div>
						<div className="work">
							<img
								src="coding_stem.png"
								alt="Coding Stem!"
								className="work-image"
							/>
							<div className="work-title">CodeQuest</div>
							<div className="work-subtitle">
								5th Place
							</div>
							<div className="work-duration">2024</div>
						</div>
						<div className="work">
							<img
								src="coding_stem.png"
								alt="Coding Stem!"
								className="work-image"
							/>
							<div className="work-title">FBLA Intro to Information Technology</div>
							<div className="work-subtitle">
								5th Place Inland Section
							</div>
							<div className="work-duration">2023</div>
						</div>
						<div className="work">
							<img
								src="coding_stem.png"
								alt="Coding Stem!"
								className="work-image"
							/>
							<div className="work-title">FBLA Mobile Application Development</div>
							<div className="work-subtitle">
								5th Place State
							</div>
							<div className="work-duration">2023</div>
						</div>
						<div className="work">
							<img
								src="coding_stem.png"
								alt="Coding Stem!"
								className="work-image"
							/>
							<div className="work-title">FBLA Mobile Application Development</div>
							<div className="work-subtitle">
								5th Place State
							</div>
							<div className="work-duration">2023</div>
						</div>
						<div className="work">
							<img
								src="coding_stem.png"
								alt="Coding Stem!"
								className="work-image"
							/>
							<div className="work-title">Seeking Science Article</div>
							<div className="work-subtitle">
								Design Director 2022-2023<br></br>
								President 2024 <br></br>
							</div>
							<div className="work-duration">2022-2024</div>
						</div>
						<div className="work">
							<img
								src="coding_stem.png"
								alt="Coding Stem!"
								className="work-image"
							/>
							<div className="work-title">Ignite CS Programming Expo</div>
							<div className="work-subtitle">
								2nd Place Prize
							</div>
							<div className="work-duration">2022</div>
						</div>
						<div className="work">
							<img
								src="coding_stem.png"
								alt="Coding Stem!"
								className="work-image"
							/>
							<div className="work-title">Ignite CS Programming Expo</div>
							<div className="work-subtitle">
								Honorable Mention Award
							</div>
							<div className="work-duration">2023</div>
						</div>
						<div className="work">
							<img
								src="coding_stem.png"
								alt="Coding Stem!"
								className="work-image"
							/>
							<div className="work-title">VEX Robotics</div>
							<div className="work-subtitle">
								VEX Robotics Leader of 2 years
							</div>
							<div className="work-duration">2022-2024</div>
						</div>
						<div className="work">
							<img
								src="coding_stem.png"
								alt="Coding Stem!"
								className="work-image"
							/>
							<div className="work-title">NCL Cybersecurity Competitions</div>
							<div className="work-subtitle">
								Rank 1172/6010 in 2022<br></br>
								Rank 936/6675 in 2023<br></br>
								Rank 1169/7879 in 2024<br></br>
							</div>
							<div className="work-duration">2022-2024</div>
						</div>
						<div><br></br></div>
						<div className="work">
							<img
								src="coding_stem.png"
								alt="Coding Stem!"
								className="work-image"
							/>
							<div className="work-title">CyberPatriot XVI</div>
							<div className="work-subtitle">
								1st Place Semifinals Silver Tier Award
							</div>
							<div className="work-duration">2023-2024</div>
						</div>
						<div className="work">
							<img
								src="coding_stem.png"
								alt="Coding Stem!"
								className="work-image"
							/>
							<div className="work-title">CyberPatriot XVI</div>
							<div className="work-subtitle">
								2nd Place Silver Tier Award
							</div>
							<div className="work-duration">2021-2022</div>
						</div>
						<div className="work">
							<img
								src="coding_stem.png"
								alt="Coding Stem!"
								className="work-image"
							/>
							<div className="work-title">National Cyber Scholarship</div>
							<div className="work-subtitle">
								Scholar Award
							</div>
							<div className="work-duration">2023</div>
						</div>
						<div className="work">
							<img
								src="coding_stem.png"
								alt="Coding Stem!"
								className="work-image"
							/>
							<div className="work-title">American Mathematics Competition 12</div>
							<div className="work-subtitle">
								2nd place
							</div>
							<div className="work-duration">2024</div>
						</div>
						<div className="work">
							<img
								src="coding_stem.png"
								alt="Coding Stem!"
								className="work-image"
							/>
							<div className="work-title">President's Volunteer Service Award</div>
							<div className="work-subtitle">
								Gold Medal - 300+ hours
							</div>
							<div className="work-duration">2022-2023</div>
						</div>
						
						
					</div>
				}
			/>
		</div>
	);
};

export default Works;
