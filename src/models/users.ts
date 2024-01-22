import { Table, Model, Column, DataType } from "sequelize-typescript";
import { Post } from "./posts";

@Table({
//   timestamps: false,
  tableName: "users",
})
export class User extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
  })
  userId!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  }) 
  userName!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;
}
// User.hasMany(Post,{as:'posts'})
