import type { NextApiRequest, NextApiResponse } from 'next';

const { TREFLE_TOKEN, TREFLE_BASE_URL } = process.env;

const ROUTE = 'v1/plants/search';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req.query;
  const response = await fetch(
    `${TREFLE_BASE_URL}/${ROUTE}?token=${TREFLE_TOKEN}&q=${query}`
  );
  const data = await response.json();
  res.status(200).json(data);
};

export default handler;
