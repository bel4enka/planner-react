export type TTodo = {
  created: string;
  comment_count: number,
  completed?: boolean,
  content: string,
  description: string,
  due: TDue
  id: number,
  order: number,
  priority: number,
  project_id: number,
  section_id: number,
  parent_id: number,
  url: string
}

export type TTodoForm = {
  content: string,
  description: string,
  color: string,
  data: string
}

export type TDue = {
  readonly date: string,
  readonly recurring: boolean,
  readonly datetime: string,
  readonly string: string,
  readonly timezone: string
}
export type TTodoStore = {
  secondsPassed: number,
  loading: boolean,
  todos: Array<TTodo>,
  increaseTimer: () => void
  addTodo: (arg0: TTodo) => void
}

export type TProject = {
  id?: number,
  name: string,
  comment_count?: number,
  order?: number,
  color?: number,
  shared?: boolean,
  sync_id?: number,
  favorite?: boolean,
  inbox_project?: boolean,
  url?: string
}
