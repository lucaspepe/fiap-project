import TarefaModel from "../models/tarefa.model";
import crypto from 'crypto'

interface TarefaDTO {
  id?: string;
  name: string;
  dateForJobDone: Date;
  conclusionAt?: Date | undefined;
}

export default class TarefaRepository {
  async create(tarefa: TarefaDTO): Promise<void> {
    await TarefaModel.create({
      id: crypto.randomUUID(),
      name: tarefa.name,
      date_for_job_done: tarefa.dateForJobDone,
    });
  }

  async update(tarefa: TarefaDTO): Promise<void> {
    const t = await TarefaModel.update(
      {
        conclusion_at: tarefa.conclusionAt,
      },
      {
        where: {
          id: tarefa.id,
        },
      }
    );
  }

  async find(id: string): Promise<TarefaDTO> {
    const tarefaModel = await TarefaModel.findOne({ where: { id } });
    return {
      dateForJobDone: tarefaModel.date_for_job_done,
      id: tarefaModel.id,
      name: tarefaModel.name,
      conclusionAt: tarefaModel.conclusion_at
    }
  }

  async findAll(): Promise<TarefaDTO[]> {
    const tarefasModels = await TarefaModel.findAll();
    return tarefasModels.map((tarefaModel) => ({ dateForJobDone: tarefaModel.date_for_job_done, id: tarefaModel.id, name: tarefaModel.name, conclusionAt: tarefaModel.conclusion_at }))
  }
}
