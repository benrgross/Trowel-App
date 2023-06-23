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
    max_tokens: 3000,
    model: 'gpt-3.5-turbo-0613',
    messages: [
      {
        role: 'system',
        content:
          'You are a helpful horticulturalist/gardener that provides plant care properties in a JSON body.',
      },
      {
        role: 'user',
        content: `Provide care properties for ${query}, including watering, pruning, light conditions, wintering, planting, soil, max temp, min temp, planting zone, diseases, and tips for growing. provide the response in JSON using the properties `,
      },
    ],
    functions: [
      {
        name: 'plantCareProperties',
        description:
          'watering, pruning, light conditions, wintering, planting, soil, max temp, min temp, planting zone, and diseases',
        parameters: {
          type: 'object',
          properties: {
            watering: {
              type: 'string',
              description: 'watering needs and instruction of the plant',
            },
            pruning: {
              type: 'string',
              description: 'pruning needs and instruction of the plant',
            },
            light: {
              type: 'string',
              description: 'light needs and instruction of the plant',
            },
            wintering: {
              type: 'string',
              description: 'wintering needs and instruction of the plant',
            },
            planting: {
              type: 'string',
              description: 'planting needs and instruction of the plant',
            },
            soil: {
              type: 'string',
              description: 'soil needs and instruction of the plant',
            },
            max_temp: {
              type: 'string',
              description: 'max temp in ferenhieght of the plant',
            },
            min_temp: {
              type: 'string',
              description: 'min temp ferenhieght of the plant',
            },
            planting_zone: {
              type: 'string',
              description: 'planting zone of the plant',
            },
            diseases: {
              type: 'string',
              description: 'description of common diseases of the plant',
            },
            tips: {
              type: 'string',
              description: 'tips for growing the plant',
            },
          },
        },
        required: [
          'watering',
          'watering',
          'light',
          'wintering',
          'planting',
          'soil',
          'max_temp',
          'min_temp',
          'planting_zone',
          'diseases',
        ],
      },
    ],
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

    if (response.data.choices[0]?.message.function_call) {
      try {
        const gptData = JSON.parse(
          response.data.choices[0]?.message.function_call.arguments
        );
        console.log('gptData', gptData);
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
