import * as React from "react";

import { HomePage } from "./components/pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ContactPage } from "./components/pages/Contact";
import { WorkPage } from "./components/pages/Work";
import { Layout } from "./components/Layout/index";

export function App() {
	return (
		<React.Fragment>
			<div className="warning-screen">
				Warning: Unsupported display size. Try desktop mode.
			</div>
			<Router>
				<Layout>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/contact" element={<ContactPage />} />
						<Route path="/work" element={<WorkPage />} />
					</Routes>
				</Layout>
			</Router>
		</React.Fragment>
	);
}
