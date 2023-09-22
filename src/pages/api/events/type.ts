export type Event = {
	name: string;
	type: 'upcoming' | 'previous';
	description: string;
	date: string;
};

export type ResponseError = {
	message: string;
};
