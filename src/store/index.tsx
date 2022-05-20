import React from "react"
import {makeAutoObservable, observable, runInAction} from "mobx"
import {TProject, TTodo, TTodoForm} from "../type/type";
import {ToDoService} from "./todoService";

class TodoStore {
  secondsPassed: number = 0;
  loading: boolean = false;
  todos: TTodo[] = [];
  open:boolean = false;
  private toDoService: any;
  project: TProject[] = [];
  statusProject: string = '';
  statusTask:string = ''
  responseTask: string[] = [];
  showTask: string = 'month';
  currentDateCalendar: Date = new Date()

  constructor() {
    this.toDoService = new ToDoService();
    makeAutoObservable(this, {
    });
  }

  getProjectAsync = async () => {
    try {
      const data = await this.toDoService.getProjects()
      runInAction(() => {
        this.project = data;
      });
    } catch (error) {
      runInAction(() => {
        this.statusProject = "error";
      });
    }
  };
  onChangeCurrentDateCalendar = (value:Date) => {
    this.currentDateCalendar = value
  }

  getTaskAsync = async () => {
    try {
      const data = await this.toDoService.getTask()
      runInAction(() => {
        this.todos = data;
      });
    } catch (error) {
      runInAction(() => {
        this.statusTask = "error";
      });
    }
  };

  setLoading = () => {
    this.loading = !this.loading;
  }

  increaseTimer = () => {
    this.secondsPassed += 1
    this.loading = !this.loading;
  }

  addTodoAsync  = async (item: { date: string; color: string; description: string; content: string }) => {
    try {
      const data = await this.toDoService.postTask(item)
      runInAction(() => {
        this.responseTask = data;
      });
    } catch (error) {
      runInAction(() => {
        this.statusTask = "error";
      });
    }
  };

  dellTodoAsync  = async (id:any) => {
    try {
      const data = await this.toDoService.deleteTask(id)
      runInAction(() => {
        this.responseTask = data;
      });
    } catch (error) {
      runInAction(() => {
        this.statusTask = "error";
      });
    }
  };
  completeTodoAsync  = async (id:any) => {
    try {
      const data = await this.toDoService.completeTask(id)
      runInAction(() => {
        this.responseTask = data;
      });
    } catch (error) {
      runInAction(() => {
        this.statusTask = "error";
      });
    }
  };
  show () {
    return this.todos
  }
  onClose = (arg:boolean) => {
    this.open = arg
  }

  showTasks (arg:string) {
    this.showTask = arg
  }
}

const todoStore = new TodoStore()
export default todoStore
