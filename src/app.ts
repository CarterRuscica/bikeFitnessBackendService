import express, { Request, Response } from 'express';
import { PORT } from './Constants';

export const app = express();
export const port = PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World test');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
