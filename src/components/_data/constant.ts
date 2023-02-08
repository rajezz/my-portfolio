import { IconLinkProps } from "../IconLink/index"

import {EmailIcon, FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon} from "../Icons"

export const PERSONALITY_SKILLS: Array<string> = [
    "Optimistic",
    "Fast learner",
    "Problem solver",
    "Collabrtive",
]

export const SOCIAL_MEDIA_LINKS: Array<IconLinkProps> = [
	{
		link: "https://www.facebook.com/rajezz.raj.92/",
		Icon: FacebookIcon
	},
	{
		link: "https://github.com/rajezz",
		Icon: GithubIcon
	},
	{
		link: "https://www.instagram.com/rajezzz_rj/",
		Icon: InstagramIcon
	},
	{
		link: "https://www.linkedin.com/in/rajeswaran-a-b654a4157/",
		Icon: LinkedInIcon
	},
	{
		link: "mailto:rajezzandrj@gmail.com",
		Icon: EmailIcon
	}
];