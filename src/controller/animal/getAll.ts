import { Request, Response } from 'express';
import animalService from '../../services/animal.service';

export default async function getAll(_req:Request, res:Response) {
  try {
    const animals = await animalService.getAll();

    return res.json(animals);
  } catch {
    return res.status(404).json({message: 'Erro inesperado'});
  }
}
