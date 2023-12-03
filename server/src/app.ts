import express from 'express';
import apiRout from './routes/index';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = 5050;

app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);

app.use('/api/v1', apiRout);
// app.use(express.static('../client/dist/')); //<--この場合、package.jsonからの相対パス
app.use(express.static(path.join(__dirname, '../../client/dist'))); //<--この場合、app.tsの自ファイルからの相対パス

app.listen(PORT, () => {
  console.log('server is running');
});
