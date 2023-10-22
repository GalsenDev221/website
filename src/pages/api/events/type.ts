export type Event = {
	name: string;
	type: 'upcoming' | 'previous';
	description: string;
	date: string;
	full: string;
};

export type ResponseError = {
	message: string;
};
