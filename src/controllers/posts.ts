import { User } from './../models/users';
import { Comment } from '../models/comments';
import { RequestHandler } from "express";


import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Post } from '../models/posts';
import { Reply } from '../models/replies';
import { Nest } from '../models/nesties';

export const createPost: RequestHandler =async (req, res) => {
    try {
      const { title, content, userId} = req.body;
      const post = await Post.create({ title, content, userId });
      res.status(200).json({message:"Post Created Successfully",post:post});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
export const getPost: RequestHandler  = async (req, res) => {
    try {
      const posts = await Post.findAll({
        // include: [
        //   {
        //     model: User,
        //     as: "Author",
        /*     include: [
              {
                model: Comment,
                as: "replies",
                include: [
                  {
                    model: Comment,
                    as: "replies",
                  },
                ],
              },
        //     ], */
        //   },
        // ],
        include: [
          {
            model: User,
            as: "user",
            attributes: ["userId", "userName"],
            
          },
          {
            model:Comment,
            as:'comments',
            attributes:["content", "postId", "commentId"],
            include:[
              {
                model: Reply,
                as:'replies',
                attributes:["content", "replyId"],
                include:[{
                  model:Nest,
                  as:'nestedReply',
                  attributes:["content", "replyId"]
                 }]
              }
            ]
          }
        ]
    //       {
    //         model:Post,
    //         as:"post",
            
    //       }
    //   ]
      
     /*  include: [
        {
          model: User,
          as: "poster",
          attributes: ["userId", "userName"],
        },
        {
          model: Comment,
          as: "comments",
          include: [
            {
              model: User,
              as: "Author",
              attributes: ["userId", "userName"],
            },
          ],
        },
      ], */
    /*  include: [
      {
        model:Comment,
        as:"post",
      }
     ] */
      
    });
      res.json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };



