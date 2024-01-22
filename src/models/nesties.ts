import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  //   timestamps: false,
  tableName: "nesties",
})
export class Nest extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
  })
  nestedReplyd!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  content!: string;

  @Column({
    type: DataType.UUID,
   
    allowNull: false,
  })
  replyId!: string;
}
