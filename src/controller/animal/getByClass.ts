import { Request, Response } from 'express';
import animalService from '../../services/animal.service';

export default async function getByClass(req:Request, res:Response) {
  try {
    const animal = await animalService.getByClass(req.params.class);

    if(!animal) {
      return res.status(404).json({message: 'ID não encontrado'})
    }

    return res.json(animal);
  } catch {
    return res.status(404).json({message: 'erro inesperado'})
  }
}
