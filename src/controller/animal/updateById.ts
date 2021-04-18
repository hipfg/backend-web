import { Request, Response } from 'express';
import animalService from '../../services/animal.service';

export default async function updateById(req:Request, res:Response) {
  try {
    const animal = await animalService.getById(Number(req.params.id));

    if(!animal) {
      return res.status(404).json({message: 'ID não encontrado'})
    }

    await animalService.update(Number(req.params.id), req.body);
  
    return res.status(201).send();
  } catch {
    return res.status(404).json({message: 'Erro inesperado'});
  }
}
