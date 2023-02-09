export interface IWork {
	title: string;
	timeline: string;
	skillSets: Array<string>;
	description: string;
	bulletins: Array<string>;
}

export interface IWorkDetail {
	title: string;
	list: Array<IWork>;
}
