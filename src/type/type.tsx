export type Todo = {
  name?: string,
  desc?: string,
  date?: string,
  notification?: string,
  color?: string

}
export type TodoStore = {
  secondsPassed: number,
  loading: boolean,
  todos: Todo[],
  increaseTimer: () => void
  addTodo: (item: Todo) => void
}
