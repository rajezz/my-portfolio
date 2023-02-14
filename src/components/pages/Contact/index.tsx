import * as React from "react";
import { Section } from "../../Section";
import { IconLinkProps } from "../../IconLink/index";
import { IMP_SOCIAL_MEDIA_LINKS } from "../../_data/constant";

import "./styles.css";

export function ContactPage() {
	return (
		<div className="page contact">
			<Section className="m-t-75 flex-panel">
				<div className="profile-card">
					<div className="picture-panel">
						<img src="assets/images/cover-pic.png" alt="Rajezz" />
					</div>
					<div className="info-panel">
						<div className="name">Rajeswaran</div>
						<a className="email" href="mailto:rajezzandrj@gmail.com">
							rajezzandrj@gmail.com
						</a>
						<div className="social-links">
							{IMP_SOCIAL_MEDIA_LINKS.map(
								({ link, Icon }: IconLinkProps, index: number) => (
									<a
										key={index}
										href={link}
										target="_blank"
										rel="noopener noreferrer">
										<Icon />
									</a>
								)
							)}
						</div>
					</div>
				</div>
				<div className="description-panel">
					<div className="title">About Me</div>
					<div className="row">
						Hello! I'm{" "}
						<span className="emphasized bold">Rajeswaran, a Software Engineer</span>{" "}
						based in <span className="emphasized bold">Chennai, India</span>, who's
						experienced in building Enterprise level Full stack web applications from
						scratch.
					</div>
					<div className="row">
						Since 2020, I've been in the software development field and got
						opportunities to work with a handful of clients/companies by building web
						applications. I'm currently working as a Software Engineer at{" "}
						<span className="emphasized bold">
							Relevantz Technologies, Chennai, India
						</span>
						. My work includes{" "}
						<span className="emphasized bold">building Web client applications</span>{" "}
						(using React, Angular, etc.),{" "}
						<span className="emphasized bold">backend servers</span> (with Node.js &
						ASP.NET), <span className="emphasized bold">CI/CD pipeline design</span>,
						etc.
					</div>
					<div className="row">
						I'm open to work as a freelancing developer/remote engineer. Reach out to me
						through{" "}
						<a className="email" href="mailto:rajezzandrj@gmail.com">
							rajezzandrj@gmail.com
						</a>{" "}
						or{" "}
						<a className="phone" href="tel:+917094642080">
							+917094642080
						</a>
						
					</div>
				</div>
			</Section>
		</div>
	);
}
