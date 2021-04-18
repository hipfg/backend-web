import db from '../database/connection';
import { IAnimal } from '../model/animal.model';

async function getAll() {
  const animals = await db<IAnimal>('animal')
    .select('*');

    return animals;
}

async function getById(id: number) {
  const animal = await db<IAnimal>('animal')
    .first('*').where('id', id);

    return animal;
}

async function getByClass(className: string) {
  const animals = await db<IAnimal>('animal')
    .select('*').where('class', className);

    return animals;
}

async function insert(animal: IAnimal) {
  await db<IAnimal>('animal').insert(animal);
}

async function update(id: number, animal: Partial<IAnimal>) {
  await db<IAnimal>('animal').update(animal).where('id', id);
}

async function remove(id: number) {
  await db<IAnimal>('animal').delete().where('id', id);
}

export default {
  getAll,
  getById,
  getByClass,
  insert,
  update,
  remove
}
