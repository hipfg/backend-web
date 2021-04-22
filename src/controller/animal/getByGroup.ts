import { Request, Response } from 'express';
import animalService from '../../services/animal.service';

export default async function getByGroup(req:Request, res:Response) {
  try {
    const animal = await animalService.getByGroup(req.params.group);

    if(!animal) {
      return res.status(404).json({message: 'Grupo não encontrado'})
    }

    return res.json(animal);
  } catch {
    return res.status(404).json({message: 'erro inesperado'})
  }
}
