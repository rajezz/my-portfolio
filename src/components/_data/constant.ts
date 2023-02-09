import { IconLinkProps } from "../IconLink/index";

import { EmailIcon, FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon } from "../Icons";

import { IWorkDetail } from "../types/work"

export const PERSONALITY_SKILLS: Array<string> = [
	"Optimistic",
	"Fast learner",
	"Problem solver",
	"Collabrtive"
];

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



export const PROJECT_DETAILS: IWorkDetail = {
	title: "Projects",
	list: [
		{
			title: "License Management Full-Stack Application",
			timeline: "2020",
			skillSets: ["Angular", "Material UI", "ASP.NET Web API", "MySQL"],
			description:
				"Worked on a Full Stack Web Application from Jan 2020 to July 2020. The application stack includes Angular (as a frontend framework) and ASP.NET Web API (as a backend server) with the database - MySQL. The application use-case includes",
			bulletins: [
				"It is a multitenant architecture with two types of Users - Employees & Admin.",
				"The Admin can create licenses and assign them to the employees as needed.",
				"On the other hand, the employee can view/download/email the licenses assigned to them."
			]
		},
		{
			title: "License Management Full-Stack Application",
			timeline: "2020",
			skillSets: ["Angular", "Material UI", "ASP.NET Web API", "MySQL"],
			description:
				"Worked on a Full Stack Web Application from Jan 2020 to July 2020. The application stack includes Angular (as a frontend framework) and ASP.NET Web API (as a backend server) with the database - MySQL. The application use-case includes",
			bulletins: [
				"It is a multitenant architecture with two types of Users - Employees & Admin.",
				"The Admin can create licenses and assign them to the employees as needed.",
				"On the other hand, the employee can view/download/email the licenses assigned to them."
			]
		},
		{
			title: "License Management Full-Stack Application",
			timeline: "2020",
			skillSets: ["Angular", "Material UI", "ASP.NET Web API", "MySQL"],
			description:
				"Worked on a Full Stack Web Application from Jan 2020 to July 2020. The application stack includes Angular (as a frontend framework) and ASP.NET Web API (as a backend server) with the database - MySQL. The application use-case includes",
			bulletins: [
				"It is a multitenant architecture with two types of Users - Employees & Admin.",
				"The Admin can create licenses and assign them to the employees as needed.",
				"On the other hand, the employee can view/download/email the licenses assigned to them."
			]
		}
	]
};
