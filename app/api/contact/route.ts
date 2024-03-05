// import type { NextApiRequest, NextApiResponse } from 'next';

// const API_KEY = process.env.MAILGUN_API_KEY || '';
// const DOMAIN = process.env.MAILGUN_DOMAIN || '';

// export const POST = async (request: any) => {
// 	const requestData = await request.json();
// 	return Response.json({ requestData: 'POST data' });
// };
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'POST') {
		const { name, email, message } = req.body;
		// Handle the form data here
        // ...
        console.log(name, email, message);
        alert(name)
		res.status(200).json({ message: 'Form data received' });
	} else {
		res.status(405).send({ message: 'Method not allowed' });
	}
}