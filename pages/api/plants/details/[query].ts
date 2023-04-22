import type { NextApiRequest, NextApiResponse } from 'next';

const { TREFLE_TOKEN, TREFLE_BASE_URL } = process.env;

const ROUTE = 'v1/plants';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('req', req);
  const { query } = req.query;

  console.log('query', query);

  const response = await fetch(
    `${TREFLE_BASE_URL}/${ROUTE}/${query}?token=${TREFLE_TOKEN}`
  );

  const data = await response.json();
  res.status(200).json(data);
};

export default handler;
