import {Joi, Segments} from 'celebrate'
import { IAnimal } from '../model/animal.model';

const getByIdSchema = {
  [Segments.PARAMS]: Joi.object<IAnimal>().keys({
    id: Joi.number().required(),
  }),
};

const getByClassSchema = {
  [Segments.PARAMS]: Joi.object<IAnimal>().keys({
    class: Joi.string().required(),
  }),
};

const postSchema = {
  [Segments.BODY]: Joi.object<IAnimal>().keys({
    description: Joi.string().required(),
    class: Joi.string().required(),
    group: Joi.string().required(),
  }),
};

const updateByIdSchema = {
  [Segments.BODY]: Joi.object<IAnimal>().keys({
    description: Joi.string(),
    class: Joi.string(),
    group: Joi.string(),
  }),
  [Segments.PARAMS]: Joi.object<IAnimal>().keys({
    id: Joi.number().required(),
  }),
};

const deleteByIdSchema = {
  [Segments.PARAMS]: Joi.object<IAnimal>().keys({
    id: Joi.number().required(),
  }),
};

export default {
  getByIdSchema,
  getByClassSchema,
  postSchema,
  updateByIdSchema,
  deleteByIdSchema,
}