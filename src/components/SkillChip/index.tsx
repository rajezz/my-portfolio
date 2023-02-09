import * as React from "react";

import "./styles.css";

interface ISkillChip {
    skill: string
}

interface ISkillChips {
    skills: Array<string>
}

const COLOR_CODES = ["#00875a", "#de350b", "#ffab00", "#5243aa", "#e200ee", "#42526e"];

export function SkillChip({ skill }: ISkillChip) {
    return (
        <div className="skill-chip">{ skill }</div>
    )
}

export function SkillChips({ skills }: ISkillChips) {
    return (
        <div className="skill-chip-panel">
            {skills.map(skill => <SkillChip skill={skill} />)}
        </div>
    )
}