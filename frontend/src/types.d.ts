export interface TredMutation {
  author: string;
  message: string;
  image: File | null;
}

export interface Tred {
  id: string;
  author: string;
  message: string;
  image: string | null;
}
