import * as React from "react";
import { Section } from "../../Section";
import { WorkSection } from "../../WorkSection";

import { PROJECT_DETAILS } from "../../_data/constant";
import "./styles.css";

export function WorkPage() {
	return (
		<div className="page">
			<Section className="m-t-75">
				<WorkSection workDetail={PROJECT_DETAILS} />
			</Section>
		</div>
	);
}