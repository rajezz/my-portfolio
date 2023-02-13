import * as React from "react";
import { Section } from "../../Section";
import { IconLinkProps } from "../../IconLink/index";
import { IMP_SOCIAL_MEDIA_LINKS } from "../../_data/constant";

import "./styles.css";

export function ContactPage() {
	return (
		<div className="page contact">
			<Section className="m-t-75">
				<div className="profile-card">
					<div className="picture-panel">
						<img src="assets/images/cover-pic.jpg" alt="Rajezz" />
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
				<div className="description-panel"></div>
			</Section>
		</div>
	);
}
