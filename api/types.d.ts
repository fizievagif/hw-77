export interface MessagesWithoutId {
  author: string;
  message: string;
}

export interface Messages extends MessagesWithoutId {
  id: string;
}