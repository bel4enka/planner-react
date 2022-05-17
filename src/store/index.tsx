import React from "react"
import {makeAutoObservable, observable, runInAction} from "mobx"
import {TProject, TTask, TTodo} from "../type/type";
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
  responseTask: string[] = []

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

  addTodoAsync  = async (item:TTask) => {
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
}

const todoStore = new TodoStore()
export default todoStore
