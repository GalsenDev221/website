import { NextApiRequest, NextApiResponse } from 'next';
import { Event, ResponseError } from '../type';
import { events } from '../data';

export default function eventHandler(
	req: NextApiRequest,
	res: NextApiResponse<Event | ResponseError>
) {
	const { query } = req;
	const { slug } = query;

	// TODO: export this functino
	const sluggify = (value: string) => {
		return value
			.replaceAll(/[^a-zA-Z0-9 ]/g, '')
			.replaceAll(' ', '-')
			.toLowerCase();
	};

	const eventDetail = events.find((event) => sluggify(event.name) === slug);

	return eventDetail
		? res.status(200).json(eventDetail)
		: res.status(404).json({ message: "Sorry, this event doesn't exists." });
}
