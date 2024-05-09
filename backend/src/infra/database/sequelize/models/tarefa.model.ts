import {
    Table,
    Model,
    PrimaryKey,
    Column
  } from "sequelize-typescript";

  @Table({
    tableName: "tarefa",
    timestamps: false,
  })
  
  export default class TarefaModel extends Model {
    @PrimaryKey
    @Column
    declare id: string;
  
    @Column({ allowNull: false })
    declare name: string;

    @Column({ allowNull: false })
    declare date_for_job_done: Date;

    @Column({ allowNull: true })
    declare conclusion_at: Date | null; 
  }
