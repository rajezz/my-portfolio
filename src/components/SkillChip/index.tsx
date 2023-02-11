import * as React from "react";

import "./styles.css";

interface ISkillChip {
	skill: string;
}

interface ISkillChips {
	skills: Array<string>;
}

export function SkillChip({ skill }: ISkillChip) {
	return <div className="skill-chip">{skill}</div>;
}

export function SkillChips({ skills }: ISkillChips) {
	return (
		<div className="skill-chip-panel">
			{skills.map((skill) => (
				<SkillChip key={skill} skill={skill} />
			))}
		</div>
	);
}
