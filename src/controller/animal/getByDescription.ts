import { Request, Response } from 'express';
import animalService from '../../services/animal.service';

export default async function getByDescription(req:Request, res:Response) {
  try {
    const animal = await animalService.getByDescription(req.params.description);

    if(!animal) {
      return res.status(404).json({message: 'Descrição não encontrada'})
    }

    return res.json(animal);
  } catch {
    return res.status(404).json({message: 'erro inesperado'})
  }
}
