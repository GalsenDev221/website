import { NextApiRequest, NextApiResponse } from 'next';
import { events } from './data';
import { Event } from './type';

export default function handler(
	_req: NextApiRequest,
	res: NextApiResponse<Event[]>
) {
	res.status(200).json(events);
}
