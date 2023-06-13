// pages/api/plant-care.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  plant_care_properties?: Record<string, any>;
  error?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req.query;
  console.log(query);
  if (!query || Array.isArray(query)) {
    res.status(400).json({
      error: 'Invalid plant_name',
    });
    return;
  }

  const gpt3body = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content:
          'You are a helpful horticulturalist/gardener that provides plant care properties in a JSON body. Always start the json with ```json and end with ```',
      },
      {
        role: 'user',
        content: `Provide care properties for ${query}, including watering, pruning, light conditions, wintering, planting, soil, max temp, min temp, planting zone, and diseases. provide the response in JSON using the properties: `,
      },
    ],
    max_tokens: 500,
    temperature: 0.7,
  };

  const gptOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.CHAT_GPT_API_KEY}`,
    },
  };

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      gpt3body,
      gptOptions
    );

    if (response.data.choices[0]?.message.content) {
      try {
        const gptData = await extractAndParseJson(
          response.data.choices[0]?.message.content
        );
        const data = { data: gptData };
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ error: 'Failed to parse JSON object' });
      }
    } else {
      res
        .status(500)
        .json({ error: 'Failed to retrieve plant care properties' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error making request to Chat GPT API' });
  }
};

export default handler;

async function extractAndParseJson(content: string) {
  // Find the start and end indices of the JSON string
  const startIndex = content.indexOf('```json') + 7;
  const endIndex = content.lastIndexOf('```');

  // Extract the JSON string
  const jsonString = content.slice(startIndex, endIndex).trim();

  // Parse the JSON string into an object
  const jsonObject = JSON.parse(jsonString);

  return jsonObject;
}
