import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  //   timestamps: false,
  tableName: "replies",
})
export class Reply extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
  })
  replyId!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  content!: string;

  @Column({
    type: DataType.INTEGER,

    allowNull: false,
  })
  commentId!: number;
}
