import * as React from "react";

import "./styles.css";

import { PERSONALITY_SKILLS, SOCIAL_MEDIA_LINKS } from "../_data/constant";
import { IconLink } from "../IconLink";
import { IconLinkProps } from "../IconLink/index";

export function Footer() {
	return (
		<footer className="footer">
			<img src="assets/svg/logo.svg" height="40px" width="auto" alt="Logo" />
			<div className="summary">
				{PERSONALITY_SKILLS.map((elem) => (
					<span key={elem} className="skill">
						{elem}
					</span>
				))}
			</div>
			<nav>
				{SOCIAL_MEDIA_LINKS.map((link: IconLinkProps, index) => (
					<IconLink key={index} {...link} />
				))}
			</nav>
			<div className="copyrights">
				Designed & developed by <a href="mailto:rajezzandrj@gmail.com">Rajeswaran</a>
			</div>
		</footer>
	);
}
