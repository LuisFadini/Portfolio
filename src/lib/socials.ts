export type SocialLink = {
	href: `http://${string}` | `https://${string}`;
	icon: string;
	color?: string;
	label: string;
};

export const socials: SocialLink[] = [
	{
		href: 'https://github.com/LuisFadini',
		icon: 'ph:github-logo-duotone',
		label: 'github',
		color: 'text-black'
	},
	{
		href: 'https://linkedin.com/in/luis-otavio-sperandio-fadini',
		icon: 'ph:linkedin-logo-duotone',
		label: 'linkedin',
		color: 'text-blue-300'
	}
];
