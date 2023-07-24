export interface ITodo {
  id: string;
  title: string;
  description: string;
  checked: boolean;
};

export interface ITodosState {
  items: ITodo[],
  isLoading: boolean,
  error: string | null,
};