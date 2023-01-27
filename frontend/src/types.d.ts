export interface TredMutation {
  author: string;
  message: string;
  image: File | null;
}

export interface Tred extends TredMutation{
  id: string;
}
