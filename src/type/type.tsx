export type TTodo = {
  content?: string,
  description?: string,
  notification?: string,
  created?: string,
  color?: string,
  id?: number,
  priority?: number,
  projectId?: number,
  sectionId?: number,
  completed?: boolean,
  labelsId?: number[],
  parent_id?: number,
  url?: string,
  commentCount?: number,
  due?: TDue
}

export type TDue = {
  readonly date?: string,
  readonly recurring?: boolean,
  readonly datetime?: string,
  readonly string?: string,
  readonly timezone?: string
}
export type TTodoStore = {
  secondsPassed: number,
  loading: boolean,
  todos: Array<TTodo>,
  increaseTimer: () => void
  addTodo: (arg0: TTodo) => void
}

export type TTask = {
  due_string: string,
  content: string,
  description: string,
  date: string,
  color: string
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
