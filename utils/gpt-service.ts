// const { NEXT_PUBLIC_URL } = process.env;

import { Configuration, OpenAIApi } from 'openai';

export async function fetchPlantCareProperties(plantName: string) {
  console.log('plantName', plantName);
  try {
    const response = await fetch(`/api/plant-gpt/${plantName}`);
    console.log('response.data', response);
    return response.json();
  } catch (error) {
    console.error('Failed to fetch plant care properties:', error);
    return null;
  }
}
