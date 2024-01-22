import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
//   timestamps: false,
  tableName: "comments",
})
export class Comment extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
  })
  commentId!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  }) 
  content!: string;
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  parentId!: number;
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
  })
  postId!: string;
}
