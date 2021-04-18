import express from 'express';
import cors from 'cors';
import {errors} from 'celebrate';

import animalRoutes from './routes/animal.routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(animalRoutes);

app.use(errors());

export default app;
