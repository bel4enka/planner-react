export type Todo = {
  name: string,
  desc: string,
  date: string,
  notification: string,
  color: string

}
export type TTodoStore = {
  secondsPassed: number,
  loading: boolean,
  todos: Array<Todo>,
  increaseTimer: () => void
  addTodo: (arg0: Todo) => void
}
