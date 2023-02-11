import * as React from "react";

export interface IconLinkProps {
	link: string;
	Icon: React.ElementType;
}

export const IconLink = ({ link, Icon }: IconLinkProps) => {
	return (
		<a className="icon-link" href={link} target="_blank">
			<Icon />
		</a>
	);
};
