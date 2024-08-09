import { IconLinkProps } from "../IconLink/index";

import { EmailIcon, FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon } from "../Icons";

import { IWorkDetail } from "../types/work";

export const PERSONALITY_SKILLS: Array<string> = [
	"Optimistic",
	"Fast learner",
	"Problem solver",
	"Collabrtive"
];

export const IMP_SOCIAL_MEDIA_LINKS: Array<IconLinkProps> = [
	{
		link: "https://www.linkedin.com/in/rajeswaran-a-b654a4157/",
		Icon: LinkedInIcon
	},
	{
		link: "https://github.com/rajezz",
		Icon: GithubIcon
	}
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
		link: "https://www.instagram.com/rajezz1/",
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
	title: "Client Projects",
	list: [
		{
			title: "Alarvy CAD",
			timeline: "2020",
			skillSets: ["Node.js", "HTML", "CSS", "JavaScript"],
			description:
				"Worked on a SaaS product - <bold>Alarvy CAD</bold> from <bold>Jan 2020</bold> to <bold>July 2020</bold>. The application was built on a Node.js server with Vanilla JavaScript for the frontend.",
			bulletins: [
				"The application is a <bold>CAD application</bold> where users can create and design several products.",
				"During my time, I mainly contributed to re-designing the frontend application and helped implement several algorithms on the backend side. It laid a foundation for me on both Frontend skills (<italic>HTML, CSS & JavaScript</italic>) and Backend side (<italic>Node.js</italic>)."
			]
		},
		{
			title: "License Management Full-Stack Application",
			timeline: "2020",
			skillSets: ["Angular", "Material UI", "ASP.NET Web API", "MySQL"],
			description:
				"Worked on a <bold>Full Stack Web Application</bold> from <bold>Jan 2020</bold> to <bold>July 2020</bold>. The application stack includes Angular (<italic>as a frontend framework</italic>) and ASP.NET Web API (<italic>as a backend server</italic>) with the database - MySQL. The application use case includes",
			bulletins: [
				"It is a multitenant architecture with two types of Users - <bold>Employees & Admin.</bold>",
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
				"Worked on 30+ SaaS applications from <bold>Jul 2020</bold> to <bold>Dec 2021</bold> mainly focusing on Full Stack web development using Node.js, React.js, HTML, CSS, MongoDB, etc.",
			bulletins: [
				"I built a SaaS integration of Freshworks products with different products like Hubspot, Shopify, SugarCRM, Google Cloud Platform, AWS, etc.",
				"I developed and maintained Freshdesk Integration with YouTube, Playstore & Google My Business.",
				"I developed several REST API micro-services in Node.js and AWS Lambda.",
				"I've contributed to various Production deployments & server monitoring (<italic>using Grafana & Prometheus</italic>).",
				"I worked on the entire SDLC lifecycle of applications/services."
			]
		},
		{
			title: "Saasly website",
			timeline: "2021",
			skillSets: ["Next.js", "React", "TypeScript", "Tailwind"],
			description:
				"I've contributed to the <bold><a href='https://saasly.in/' target='_blank' >Saasly</a> website</bold> (Spritle Software subset) built on a Next.js framework with React TypeScript and Tailwind (<italic>CSS framework</italic>).",
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
				"The app uses flow-based programming to execute a series of tasks provided through the config file. Thus whenever it is needed to add a new process (<italic>a series of steps</italic>), we can just add them in the config file (<italic>It relieves us from the burden of updating the code/going through the whole process of testing/deploying</italic>).",
				"At various places, it accesses external services like AWS products, MSSQL, etc. to access/update data. The error handling is integrated with Elastic Stack and Opsgenie for the timely resolution of errors if occurred."
			]
		}
	]
};

export const EXPERIENCE_DETAILS: IWorkDetail = {
	title: "Experience",
	list: [
		{
			title: "Software Developer @Alarvy Technologies Pvt. Ltd, Chennai ",
			timeline: "Dec 2019 - Jun 2020",
			skillSets: [
				"Node.js",
				"HTML",
				"CSS",
				"JavaScript",
				"Angular",
				"Material UI",
				"ASP.NET Web API",
				"MySQL"
			],
			description:
				"For <bold>seven months</bold> of my time in <bold>Alarvy</bold>, I have been a part of a 5+ developers team working on an Enterprise application and contributed my efforts and knowledge in building the same.",
			bulletins: [
				"As a Fresher, Alarvy helped me to learn the fundamental concepts and practical knowledge of both frontend and backend technologies.,",
				"After a few months, I was given the responsibility to lead the Frontend application using Angular. I've learnt a lot in resolving the complexity of data handling and the dynamic representation of data in the form of Tables."
			]
		},
		{
			title: "Full Stack Engineer @Spritle Software, Chennai",
			timeline: "Jul 2020 - Dec 2021",
			skillSets: [
				"Node.js",
				"HTML",
				"CSS",
				"MongoDB",
				"AWS",
				"REST API",
				"TypeScript",
				"React.js",
				"Next.js",
				"Tailwind"
			],
			description:
				"For <bold>1 year and 6 months</bold> at <bold>Spritle</bold>, I worked on various micro-services right from scratch and acquainted with the Ticket Supporting process.",
			bulletins: [
				"I've been part of the entire SDLC lifecycle right from requirement gathering to delivering the application and supporting thereafter.",
				"I've gained a concrete understanding of Server application development/maintenance, Git, project status tracking, efficient time allocation, etc."
			]
		},
		{
			title: "Software Engineer @Relevantz Technologies, Chennai",
			timeline: "Jan 2022 - Present",
			skillSets: [
				"Node.js",
				"MSSQL",
				"AWS Lambda",
				"SQS",
				"SNS",
				"CloudWatch",
				".NET",
				"Elastic Stack",
				"Opsgenie",
				"SoapUI Testing"
			],
			description:
				"Since <bold>Jan 2022</bold>, at <bold>Relevantz</bold>, I've been working on a project for the American client PBS.",
			bulletins: [
				"I'm currently working on backend technologies. Though apart from that, I spare my free time to learn new Technologies in frontend.",
				"Also, I've worked on several POC, bug fixing, code optimization, etc."
			]
		}
	]
};

export const PERSONAL_PROJECTS_DETAILS: IWorkDetail = {
	title: "Personal Projects",
	list: [
		{
			title: "Connect",
			timeline: "2020",
			skillSets: ["Node.js", "HTML", "CSS", "MySQL", "Under Maintanence"],
			description:
				"It is a <bold>Node.js Web application</bold> that allows users to share posts (<italic>photos/texts</italic>) and like/comment on others' posts. It is deployed in Vercel. Follow this <a href='https://connect-by-rajezz.vercel.app/' target='_blank' >link</a>.",
			bulletins: [
				"The User can register/log in using their email.",
				"The User can post images/text. It will be visible to everyone.",
				"Anyone can like the post and add comments."
			]
		},
		{
			title: "Dynamic Form Manager",
			timeline: "2021",
			skillSets: ["React", "Next.js", "TypeScript", "SendGrid", "Material UI", "Live"],
			description:
				"It is a frontend application while backend logic is not yet implemented. Browser memory has been used as data storage. The application is built using Next.js with React & TypeScript and deployed in Vercel. Follow this <a href='https://form-manager-by-rajezz.vercel.app/' target='_blank' >link</a>.",
			bulletins: [
				"It is quite like Google Forms but in the simplest form.",
				"It supports two kinds of accounts: Admin & User.",
				"The Admin can create a Form model by configuring input name, type, etc. And he/she can share it with anyone by providing their email id.",
				"Everyone who has been invited can access the form. They can submit the form by filling out the necessary details. Upon submitting the form, the Admin can view and export all the submitted forms."
			]
		},
		{
			title: "Tic Tac Toe",
			timeline: "2022",
			skillSets: ["React", "Next.js", "TypeScript", "Live"],
			description:
				"Even though it's not a fun game to play, I built it to learn the concepts. The application is built using Next.js with React & TypeScript and deployed in Vercel. Follow this <a href='https://tic-tac-toe-rajezz.vercel.app/' target='_blank' >link</a>.",
			bulletins: [
				"The cool part is that the algorithm to find the winner was solely developed by me. I've implemented a new logic to do so. Not sure if it is an efficient solution, but I think so."
			]
		}
	]
};
