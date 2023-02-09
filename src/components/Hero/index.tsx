import * as React from "react";

import "./styles.css";

export function Hero() {
	return (
		<div className="hero-page">
			<div className="hero-panel">
				<div className="title">
					Hi, I'm <span className="emphasized">Rajeswaran</span>
				</div>
				<div className="description">
					I'm a Software Engineer who loves to learn new technologies and work on the
					technical challenges!
				</div>
			</div>
		</div>
	);
}
