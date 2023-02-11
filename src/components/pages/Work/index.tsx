import * as React from "react";
import { Section } from "../../Section";
import { WorkSection } from "../../WorkSection";

import { PROJECT_DETAILS, EXPERIENCE_DETAILS, PERSONAL_PROJECTS_DETAILS } from "../../_data/constant";
import "./styles.css";

export function WorkPage() {
	return (
		<div className="page">
			<Section className="m-t-75">
				<WorkSection workDetail={PROJECT_DETAILS} />
				<div className="divider"></div>
				<WorkSection workDetail={EXPERIENCE_DETAILS} />
				<div className="divider"></div>
				<WorkSection workDetail={PERSONAL_PROJECTS_DETAILS} />
			</Section>
		</div>
	);
}