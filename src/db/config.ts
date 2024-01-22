import { Sequelize } from "sequelize-typescript";
import { User } from "../models/users";
import { Post } from "../models/posts";
import { Comment } from "../models/comments";
import { Reply } from "../models/replies";
import { Nest } from "../models/nesties";
const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "testing",
  logging: false,
  models: [User, Post, Comment, Reply, Nest],
});

User.hasMany(Post, { foreignKey: 'userId', as: 'posts' });
Post.belongsTo(User, { foreignKey: 'userId', as: 'user' });


Post.hasMany(Comment,{ foreignKey: 'postId', as:'comments'})
Comment.belongsTo(Post, { foreignKey: 'postId', as:'author'});

// Comment.hasMany(Comment,{foreignKey:'commentId', as:'replies'})
// Comment.belongsTo(Comment, { foreignKey:'commentId', as:'parent'});

Comment.hasMany(Reply,{foreignKey:'commentId', as:'replies'});
Reply.belongsTo(Comment, {foreignKey:'commentId', as:'parent'});

Reply.hasOne(Nest,{foreignKey:'replyId', as:'nestedReply'});
Nest.belongsTo(Reply, {foreignKey:'replyId', as:'Nest'});
export default connection;