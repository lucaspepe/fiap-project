import { Request, Response } from 'express';
import TarefaRepository from '../../infra/database/sequelize/repositories/tarefas.repository';

class TarefaController {

    async create (req: Request, res: Response) {
        const repository = new TarefaRepository();
        const { name,  dateJob} = req.body;
        const date = new Date(Date.parse(dateJob))
        await repository.create({ name, dateForJobDone: date})
        return res.send().status(201)
    }

    async list (req: Request, res: Response) {
        const repository = new TarefaRepository();
        const tarefas = await repository.findAll()
        return res.json(tarefas).status(200)
    }

    async update (req: Request, res: Response) {
        const { id } = req.body;
        const repository = new TarefaRepository();
        const tarefa = await repository.find(id)
        
        if(tarefa.conclusionAt) {
            tarefa.conclusionAt = null
        } else {
            tarefa.conclusionAt = new Date()
        }
        await repository.update(tarefa)    
        return res.send().status(200)   
    }
}

export default new TarefaController();
