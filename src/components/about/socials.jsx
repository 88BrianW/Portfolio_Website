import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import {
	faDiscord,
	faInstagram,
	faGithub,
	faSpotify,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import "./styles/socials.css";

const Socials = () => {
	return (
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
	);
};

export default Socials;
