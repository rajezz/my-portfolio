import * as React from "react";
import "./styles.css";
import { IWorkDetail } from "../types/work";
import { SkillChips } from "../SkillChip";

interface IWorkSectionProps {
	workDetail: IWorkDetail;
}

const getHTMLContentFromString = (str: string) => ({
	__html: str
});

export function WorkSection({ workDetail }: IWorkSectionProps) {
	return (
		<div className="work-section">
			<div className="section-title">{workDetail.title}</div>
			<ul className="timeline">
				{workDetail.list.map((entry) => (
					<li className="entry" key={entry.title}>
						<div className="row heading">
							<div className="title">{entry.title}</div>
							<div className="year">{entry.timeline}</div>
						</div>
						<div className="row skill-sets">
							<SkillChips skills={entry.skillSets} />
						</div>
						<div className="row desc">
							<div
								className="desc-textarea"
								dangerouslySetInnerHTML={getHTMLContentFromString(
									entry.description
								)}></div>
							<ul className="bulletin-points">
								{entry.bulletins.map((point) => (
									<li
										key={point}
										className="point"
										dangerouslySetInnerHTML={getHTMLContentFromString(
											point
										)}></li>
								))}
							</ul>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
