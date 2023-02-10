import { IconLinkProps } from "../IconLink/index";

import { EmailIcon, FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon } from "../Icons";

import { IWorkDetail } from "../types/work";

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
			title: "Alarvy CAD",
			timeline: "2020",
			skillSets: ["Node.js", "HTML", "CSS", "JavaScript"],
			description:
				"Worked on a SaaS product - Alarvy CAD from Jan 2020 to July 2020. The application was built on a Node.js server with Vanilla JavaScript for the frontend.",
			bulletins: [
				"The application is a CAD application where users can create and design several products.",
				"During my time, I mainly contributed to re-designing the frontend application and helped implement several algorithms on the backend side. It laid a foundation for me on both Frontend skills (HTML/CSS/JavaScript) and Backend side (Node.js)."
			]
		},
		{
			title: "License Management Full-Stack Application",
			timeline: "2020",
			skillSets: ["Angular", "Material UI", "ASP.NET Web API", "MySQL"],
			description:
				"Worked on a Full Stack Web Application from Jan 2020 to July 2020. The application stack includes Angular (as a frontend framework) and ASP.NET Web API (as a backend server) with the database - MySQL. The application use case includes",
			bulletins: [
				"It is a multitenant architecture with two types of Users - Employees & Admin.",
				"The Admin can create licenses and assign them to the employees as needed.",
				"On the other hand, the employee can view/download/email the licenses assigned to them."
			]
		},
		{
			title: "SaaS Applications",
			timeline: "2020 - 2021",
			skillSets: [
				"Node.js",
				"HTML",
				"CSS",
				"MongoDB",
				"AWS",
				"REST API",
				"TypeScript",
				"React.js"
			],
			description:
				"Worked on 30+ SaaS applications from Jul 2020 to Dec 2021 mainly focusing on Full Stack web development using Node.js, React.js, HTML, CSS, MongoDB, etc.",
			bulletins: [
				"I built a SaaS integration of Freshworks products with different products like Hubspot, Shopify, SugarCRM, Google Cloud Platform, AWS, etc.",
				"I developed and maintained Freshdesk Integration with YouTube, Playstore & Google My Business.",
				"I developed several REST API micro-services in Node.js and AWS Lambda.",
				"I've contributed to various Production deployments & server monitoring (using Grafana & Prometheus).",
				"I worked on the entire SDLC lifecycle of applications/services."
			]
		},
		{
			title: "Saasly website",
			timeline: "2021",
			skillSets: ["Next.js", "React", "TypeScript", "Tailwind"],
			description:
				"I've contributed to the Saasly website (Spritle Software subset) built on a Next.js framework with React TypeScript and Tailwind (CSS framework).",
			bulletins: [
				"It is a static website showcasing the work/projects of Saasly. Though, it lets the Admin add blogs/posts dynamically using the Markdown template without going through all processes of testing/deploying.",
				"I played a major role in designing the Saasly logo and several other vectors on the website."
			]
		},
		{
			title: "PBS Internal tool - Task Executor",
			timeline: "2022",
			skillSets: [
				"Node.js",
				"MSSQL",
				"AWS Lambda",
				"SQS",
				"SNS",
				"CloudWatch",
				"Elastic Stack",
				"Opsgenie"
			],
			description:
				"I've played an important role in developing and deploying an internal tool Task executer built on Node.js and using external services like AWS Lambda, SQS, SNS, Cloudwatch, Microsoft SQL Server, Elastic Stack, Opsgenie, etc.",
			bulletins: [
				"The app uses flow-based programming to execute a series of tasks provided through the config file. Thus whenever it is needed to add a new process (a series of steps), we can just add them in the config file (It relieves us from the burden of updating the code/going through the whole process of testing/deploying).",
				"At various places, it accesses external services like AWS products, MSSQL, etc. to access/update data. The error handling is integrated with Elastic Stack and Opsgenie for the timely resolution of errors if occurred."
			]
		}
	]
};
