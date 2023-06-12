import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ message: 'Image URL is required.' });
  }

  try {
    const response = await axios.get(url as string, {
      responseType: 'arraybuffer',
    });

    res.setHeader('Content-Type', response.headers['content-type']);
    return res.end(response.data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'An error occurred.' });
  }
}
