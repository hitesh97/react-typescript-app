
export interface ITodo {
    id: number;
    text: string;
    isDone: boolean;
  }

export class Todo implements ITodo {
    id: number;
    text: string;
    isDone: boolean = false;
  }
