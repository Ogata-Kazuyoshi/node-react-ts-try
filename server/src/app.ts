import express from 'express';
import apiRout from './routes/index';
import cors from 'cors';

const app = express();
const PORT = 5050;

app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);

app.use('/api/v1', apiRout);

app.listen(PORT, () => {
  console.log('server is running');
});
