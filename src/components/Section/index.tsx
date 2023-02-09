import * as React from "react";
import "./styles.css";

export function Section({children, className}: any) {
	return (
		<div className={`section ${className}`}>
			<div className="container">{children}</div>
		</div>
	);
}
