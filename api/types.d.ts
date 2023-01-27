export interface MessagesWithoutId {
  author: string;
  message: string;
  image: string | null
}

export interface Messages extends MessagesWithoutId {
  id: string;
}