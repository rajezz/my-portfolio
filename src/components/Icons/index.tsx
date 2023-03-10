/* -------------------------------------------------------------------------- */
/*                            External Dependecies                            */
/* -------------------------------------------------------------------------- */
import * as React from "react";

interface Props {
	className?: string;
}

export const GithubIcon = ({ className }: Props) => {
	return (
		<svg
			id="Bold"
			enableBackground="new 0 0 24 24"
			height="24"
			viewBox="0 0 24 24"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
			className={className}>
			<path
				className="icon-path github-icon-path"
				d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"
			/>
		</svg>
	);
};

export const FacebookIcon = ({ className }: Props) => {
	return (
		<svg
			id="Bold"
			enableBackground="new 0 0 24 24"
			height="24"
			viewBox="0 0 24 24"
			width="24"
			className={className}
			xmlns="http://www.w3.org/2000/svg">
			<path
				className="icon-path facebook-icon-path"
				d="m3 24h9v-8.25h-3v-3.75h3v-3c0-2.486 2.014-4.5 4.5-4.5h3v3.75h-1.5c-.828 0-1.5-.078-1.5.75v3h3.75l-1.5 3.75h-2.25v8.25h4.5c1.654 0 3-1.346 3-3v-18c0-1.655-1.346-3-3-3h-18c-1.655 0-3 1.345-3 3v18c0 1.654 1.345 3 3 3z"
			/>
		</svg>
	);
};

export const LinkedInIcon = ({ className }: Props) => {
	return (
		<svg
			id="Bold"
			enableBackground="new 0 0 24 24"
			height="24"
			viewBox="0 0 24 24"
			width="24"
			className={className}
			xmlns="http://www.w3.org/2000/svg">
			<path
				className="icon-path linkedin-icon-path"
				d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"
			/>
			<path className="icon-path linkedin-icon-path" d="m.396 7.977h4.976v16.023h-4.976z" />
			<path
				className="icon-path linkedin-icon-path"
				d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"
			/>
		</svg>
	);
};

export const InstagramIcon = ({ className }: Props) => {
	return (
		<svg
			id="Bold"
			enableBackground="new 0 0 24 24"
			height="24"
			viewBox="0 0 24 24"
			width="24"
			className={className}
			xmlns="http://www.w3.org/2000/svg">
			<path
				className="icon-path instagram-icon-path"
				d="m12.004 5.838c-3.403 0-6.158 2.758-6.158 6.158 0 3.403 2.758 6.158 6.158 6.158 3.403 0 6.158-2.758 6.158-6.158 0-3.403-2.758-6.158-6.158-6.158zm0 10.155c-2.209 0-3.997-1.789-3.997-3.997s1.789-3.997 3.997-3.997 3.997 1.789 3.997 3.997c.001 2.208-1.788 3.997-3.997 3.997z"
			/>
			<path
				className="icon-path instagram-icon-path"
				d="m16.948.076c-2.208-.103-7.677-.098-9.887 0-1.942.091-3.655.56-5.036 1.941-2.308 2.308-2.013 5.418-2.013 9.979 0 4.668-.26 7.706 2.013 9.979 2.317 2.316 5.472 2.013 9.979 2.013 4.624 0 6.22.003 7.855-.63 2.223-.863 3.901-2.85 4.065-6.419.104-2.209.098-7.677 0-9.887-.198-4.213-2.459-6.768-6.976-6.976zm3.495 20.372c-1.513 1.513-3.612 1.378-8.468 1.378-5 0-7.005.074-8.468-1.393-1.685-1.677-1.38-4.37-1.38-8.453 0-5.525-.567-9.504 4.978-9.788 1.274-.045 1.649-.06 4.856-.06l.045.03c5.329 0 9.51-.558 9.761 4.986.057 1.265.07 1.645.07 4.847-.001 4.942.093 6.959-1.394 8.453z"
			/>
			<circle className="icon-path instagram-icon-path" cx="18.406" cy="5.595" r="1.439" />
		</svg>
	);
};

export const EmailIcon = ({ className }: Props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			width="24"
			height="24"
			className={className}
			viewBox="0 0 34 27">
			<path
				className="icon-path"
				d="M28.5 25.6H5.5C3.4 25.6 1.70001 23.8929 1.70001 21.7841V5.41592C1.70001 3.30714 3.4 1.59998 5.5 1.59998H28.5C30.6 1.59998 32.3 3.30714 32.3 5.41592V21.7841C32.4 23.8929 30.6 25.6 28.5 25.6Z"></path>
			<path
				d="M17 14.9557L2.60001 3.60834"
				stroke="#fff"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit="10"
				strokeWidth="2"></path>
			<path
				d="M31.4 3.60834L17 14.9557"
				stroke="#fff"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit="10"
				strokeWidth="2"></path>
		</svg>
	);
};

export const OpenNewLinkIcon = ({ className }: Props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="24px"
			viewBox="0 0 24 24"
			width="24px"
			className={className}>
			<path d="M0 0h24v24H0z" fill="none" />
			<path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
		</svg>
	);
};

export const FileDownloadIcon = ({ className }: Props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			enable-background="new 0 0 24 24"
			height="24px"
			viewBox="0 0 24 24"
			width="24px"
			className={className}>
			<g>
				<rect fill="none" height="24" width="24" />
			</g>
			<g>
				<path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z" />
			</g>
		</svg>
	);
};
