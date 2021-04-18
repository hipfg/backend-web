import { Router } from 'express';
import { celebrate} from 'celebrate';

import getAll from '../controller/animal/getAll';
import getById from '../controller/animal/getById';
import getByClass from '../controller/animal/getByClass';
import insert from '../controller/animal/insert';
import updateById from '../controller/animal/updateById';
import deteById from '../controller/animal/deleteById';

import validation from '../validation/animal.validation';


const routes = Router();

routes.get('/animal', getAll);
routes.get('/animal/:id', celebrate(validation.getByIdSchema), getById);
routes.get('/animal/byclass/:class', celebrate(validation.getByClassSchema), getByClass);
routes.post('/animal', celebrate(validation.postSchema), insert);
routes.put('/animal/:id', celebrate(validation.updateByIdSchema), updateById);
routes.delete('/animal/:id', celebrate(validation.deleteByIdSchema), deteById);

export default routes;
