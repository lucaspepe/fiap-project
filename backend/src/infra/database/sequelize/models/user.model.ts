import {
    Table,
    Model,
    PrimaryKey,
    Column
  } from "sequelize-typescript";

  @Table({
    tableName: "user",
    timestamps: false,
  })
  export default class UserModel extends Model {
    @PrimaryKey
    @Column
    declare id: string;
  
    @Column({ allowNull: false })
    declare email: string;

    @Column({ allowNull: false })
    declare password: string;
  }
