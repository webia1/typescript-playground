import axios from 'axios';

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer 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',
  },
});

export default openai;

const response = openai.post('/engines/davinci/completions', {
  prompt: 'Albert Einstein is',
  max_tokens: 5,
  temperature: 0.9,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
  stop: ['\n'],
});

response.then((res) => console.log(res.data));
