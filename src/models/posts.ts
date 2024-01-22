import { Table, Model, Column, DataType } from "sequelize-typescript";
import { User } from "./users";
import connection from "../db/config";

@Table({
  //   timestamps: false,
  tableName: "posts",
})
export class Post extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
  })
  postId!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  content!: string;
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  userId!: string;
}

// Post.belongsTo(User, { foreignKey: "userId", as: "user" });
