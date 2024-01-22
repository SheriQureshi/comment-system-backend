import { Nest } from "../models/nesties";
import { Post } from "../models/posts";
import { Reply } from "../models/replies";
import { Comment } from "./../models/comments";
import { RequestHandler } from "express";

export const postComment: RequestHandler = async (req, res) => {
  try {
    const { content, postId } = req.body;
    console.log(req.body);
    const comment = await Comment.create({ content, postId, parentId: 0 });
    res
      .status(200)
      .json({ message: "sucessfully commented", comment: comment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getComment: RequestHandler = async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: {
        parentId: 0,
      },
      attributes: ["content", "postId", "commentId"],
      include: [
        {
          model: Reply,
          as: "replies",
          attributes: ["content", "replyId"],
          include: [
            {
              model: Nest,
              as: "nestedReply",
              attributes: ["content", "replyId"],
            },
          ],
        },
      ],
     
    });

    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
