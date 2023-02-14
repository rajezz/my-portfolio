import * as React from "react";
import { Hero } from "../../Hero";
import { FileDownloadIcon, OpenNewLinkIcon } from "../../Icons";
import { Section } from "../../Section";

import "./styles.css";

export function HomePage() {
	return (
		<div className="page">
			<Hero />
			<div className="reveal-panel"></div>
			<Section>
				<div className="home-description">
					A versatile engineer capable of solving complex problems, adapting to new
					technologies, handling work pressure, collaborating with teammates. I have been
					acclaimed for providing solutions/workarounds for complex use-cases. Having a
					fundamental knowledge on JavaScript, HTML & CSS, React, Node.js, MongoDB, MSSQL,
					AWS, etc., I can incorporate my renowned skills on both front-end and back-end
					applications.
				</div>
				<div className="resume-panel">
					<a
						href="https://drive.google.com/file/d/1lyRHQ6MKHq2kSeY5LjaBmXpnKB7jNKIO/view?usp=sharing"
						target="_blank">
						<FileDownloadIcon className={"prefix"} />
						My Resume
						<OpenNewLinkIcon className={"suffix"} />
					</a>
				</div>
			</Section>
		</div>
	);
}
