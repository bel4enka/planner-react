import React from "react"
import {makeAutoObservable} from "mobx"
import {Todo} from "../type/type";

class TodoStore {
  secondsPassed = 0
  loading = false;
  todos = []


  constructor() {
    makeAutoObservable(this, {
    });
  }

  setLoading = () => {
    this.loading = !this.loading;
  }

  increaseTimer = () => {
    this.secondsPassed += 1
    this.loading = !this.loading;
  }

  addTodo = (item:Todo) => {
    // @ts-ignore
    this.todos.push({item});
  }
}

const todoStore = new TodoStore()
export default todoStore
