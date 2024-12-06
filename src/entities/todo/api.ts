import { TodoItemModel } from "./model";
import { createStore, createEvent, createEffect } from 'effector';

const sleep = (ms: number) => {
  return new Promise((res) => {
    setTimeout(() => res(true), ms);
  });
};

export const todoApi = {
  saveTodos: async (todos: TodoItemModel[]) => {
    await sleep(1000);
    window.localStorage.setItem("todos", JSON.stringify(todos));
  },
  getTodos: async () => {
    await sleep(1000);

    return JSON.parse(window.localStorage.getItem("todos") ?? "[]").map(
      (todoItem: TodoItemModel) => ({
        ...todoItem,
        create_date: new Date(todoItem.create_date),
      })
    );
  },
};


interface CommentData {
  author: string;
  avatar: string;
  content: string;
  datetime: string;
  id: string
}

const initialComments: CommentData[] = JSON.parse(window.localStorage.getItem('comments') ?? '[]');

export const addComment = createEvent<CommentData>();
export const loadCommentsFx = createEffect(() => {
  return JSON.parse(window.localStorage.getItem('comments') ?? '[]');
});

export const deleteComment = createEvent<string>(); 

export const $comments = createStore<CommentData[]>(initialComments)
  .on(addComment, (comments, newComment) => {
    const updatedComments = [newComment, ...comments];
    window.localStorage.setItem('comments', JSON.stringify(updatedComments));
    return updatedComments;
  })
  .on(deleteComment, (comments, idToDelete) => {
    const updatedComments = comments.filter(comment => comment.id !== idToDelete);
    window.localStorage.setItem('comments', JSON.stringify(updatedComments));
    return updatedComments;
  })
  .on(loadCommentsFx.doneData, (_, comments) => comments);

$comments.watch((comments) => {
  if (comments.length) {
    window.localStorage.setItem('comments', JSON.stringify(comments));
  }
});
