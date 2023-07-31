export interface ITodo {
  _id: string;
  title: string;
  description: string;
  checked: boolean;
};

export interface ITodosState {
  items: ITodo[];
  isLoading: boolean;
  error: string | null;
};

export interface INewTodo {
  title: string;
  description: string;
}