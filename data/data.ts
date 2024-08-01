export interface DummyItem {
	id: number;
	details: string;
	description: string;
	name: string;
}

export const DUMMY_ITEMS: DummyItem[] = [
	{
		id: 1,
		details: "https://en.wikipedia.org/wiki/Peoples_Temple",
		description:
			"Led by Reverend Jim Jones, this cult is known for the Jonestown Massacre in 1978, where over 900 followers died in a mass murder-suicide.",
		name: "The People’s Temple",
	},
	{
		id: 2,
		details: "https://en.wikipedia.org/wiki/NXIVM",
		description:
			"Founded by Keith Raniere, NXIVM was accused of running an abusive sex cult.Female members were branded, used as sex slaves, and blackmailed. Actress Allison Mack was also implicated in recruiting members.",
		name: "NXIVM",
	},
	{
		id: 3,
		details:
			"https://en.wikipedia.org/wiki/Fundamentalist_Church_of_Jesus_Christ_of_Latter-Day_Saints",
		description:
			"Led by Warren Jeffs, this polygamist cult faced allegations of child abuse and forced marriages.",
		name: "The Fundamentalist Church of Jesus Christ of Latter-Day Saints",
	},
	{
		id: 4,
		details: "https://en.wikipedia.org/wiki/Aum_Shinrikyo",
		description:
			"A Japanese cult led by Shoko Asahara, responsible for the 1995 Tokyo subway sarin gas attack.",
		name: "Angel’s Landing",
	},
	{
		id: 5,
		details: "https://en.wikipedia.org/wiki/Rajneeshpuram",
		description:
			"Founded by Bhagwan Shree Rajneesh, this cult established a commune in Oregon. They engaged in criminal activities, including poisoning salad bars in a nearby town.",
		name: "Rajneeshpuram",
	},
];
