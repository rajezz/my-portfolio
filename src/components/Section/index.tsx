import * as React from "react";
import "./styles.css";

interface Props {
	children: JSX.Element[] | JSX.Element;
	className?: string;
}

export function Section({ children, className }: Props) {
	return (
		<div className={`section ${className}`}>
			<div className="container">{children}</div>
		</div>
	);
}
