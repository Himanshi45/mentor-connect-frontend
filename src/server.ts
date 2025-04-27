import express, { Request, Response } from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post('/api/chat', async (req: Request, res: Response) => {
  const { prompt } = req.body;

  try {
    // Example for OpenAI
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'gpt-4',
        prompt: prompt,
        max_tokens: 150,
      },
      {
        headers: {
          'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
        },
      }
    );

    res.status(200).json({ reply: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error('Error fetching AI response:', error);
    res.status(500).json({ error: 'Failed to get AI response' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
