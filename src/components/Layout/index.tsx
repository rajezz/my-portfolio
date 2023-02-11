import * as React from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

interface Props {
	children: JSX.Element;
}

export const Layout = ({ children }: Props) => {
	return (
		<React.Fragment>
			<Header />
			{children}
			<Footer />
		</React.Fragment>
	);
};
