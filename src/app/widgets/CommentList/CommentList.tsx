import React from "react";
import { List, Button } from "antd";
import { Comment } from "@ant-design/compatible";
import { deleteComment } from "../../../entities/todo/api";
import styles from "./CommentList.module.scss"
import { CommentData } from "./Comment/Comment";

export const CommentList: React.FC<{ comments: CommentData[] }> = ({
  comments,
}) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={({ id, author, avatar, content, datetime }) => (
      <Comment
        author={author}
        avatar={avatar}
        content={
          <div className={styles.commentContainer}>
            <div className={styles.commentContent}>{content}</div>
            <Button
              danger
              onClick={() => deleteComment(id)}
            >
              Удалить
            </Button>
          </div>
        }
        datetime={datetime}
      />
    )}
  />
);
