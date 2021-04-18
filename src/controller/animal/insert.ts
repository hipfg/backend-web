import { Request, Response } from 'express';
import animalService from '../../services/animal.service';

export default async function insert(req:Request, res:Response) {
  try {
    await animalService.insert(req.body);
  
    return res.status(201).send();
  } catch {
    return res.status(404).send();
  }
}
