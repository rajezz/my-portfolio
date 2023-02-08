import * as React from "react";

import "./styles.css";

import { EmailIcon, FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon } from "../Icons";
import { PERSONALITY_SKILLS, SOCIAL_MEDIA_LINKS } from "../_data/constant";
import { IconLink } from "../IconLink";
import { IconLinkProps } from "../IconLink/index";

import { NavLink, NavLinkProps } from "react-router-dom";

const navList = [
	{
		label: "Home",
		path: "/"
	},
	{
		label: "My Work",
		path: "/work"
	},
	{
		label: "Contact",
		path: "/contact"
	}
];

export function Header() {
	return (
		<header className="header">
			<div className="title">
				<a href="/" className="title-link">
					<img
						src="assets/svg/formatted-title.svg"
						height="40px"
						width="auto"
						alt="Logo"
					/>
				</a>
			</div>
			<div className="logo">
				<img src="assets/svg/logo.svg" height="40px" width="auto" alt="Logo" />
			</div>
			<nav className="nav-list">
				{navList.map((e) => (
					<NavLink
						to={e.path}
						className={({ isActive }) =>
							isActive ? "nav-link highlighted" : "nav-link"
						}>
						{e.label}
					</NavLink>
				))}
			</nav>
		</header>
	);
}
