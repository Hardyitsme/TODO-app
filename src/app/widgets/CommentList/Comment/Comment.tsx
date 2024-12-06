import { Avatar } from "antd";
import { Comment } from "@ant-design/compatible";
import React, { useState, ChangeEvent } from "react";
import { useUnit } from "effector-react";
import { CreateComm } from "../CreateComm/CreateComm";
import { generateId } from "../../../../utils/generateId";
import { $comments, addComment } from "../../../../entities/todo/api";
import { CommentList } from "../CommentList";

export interface CommentData {
  id: string; 
  author: string;
  avatar: string;
  content: string;
  datetime: string;
}

export const CommetsTodo: React.FC = () => {
  const comments = useUnit($comments);

  const [value, setValue] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleSubmit = () => {
    if (!value) {
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);

      const newComment: CommentData = {
        id: generateId(), 
        author: ".hardy",
        avatar:
          "https://sun9-7.userapi.com/s/v1/ig2/GcAJRpZ-yzqB7JokCQUCU-pvRUIUmt1vdBRmfoMbg0XcjAmYvVVO1gA0ndN6SO5_96H1pyM_HVNxS33afnvPe3Pg.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,558x744&from=bu&u=xrTM5o7_FnEk36lz2hFBdsDXasV42DzXzURFWUo2NSM&cs=558x744",
        content: value,
        datetime: new Date().toISOString(),
      };

      addComment(newComment);
      setValue("");
    }, 1000);
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      {!!comments.length && <CommentList comments={comments} />}

      <Comment
        avatar={
          <Avatar
            src="https://sun9-7.userapi.com/s/v1/ig2/GcAJRpZ-yzqB7JokCQUCU-pvRUIUmt1vdBRmfoMbg0XcjAmYvVVO1gA0ndN6SO5_96H1pyM_HVNxS33afnvPe3Pg.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,558x744&from=bu&u=xrTM5o7_FnEk36lz2hFBdsDXasV42DzXzURFWUo2NSM&cs=558x744"
            alt=".hardy"
          />
        }
        content={
          <CreateComm
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={submitting}
            value={value}
          />
        }
      />
    </div>
  );
};

export default CommetsTodo;
