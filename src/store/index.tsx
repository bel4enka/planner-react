import React from "react"
import {makeAutoObservable, observable} from "mobx"
import {Todo} from "../type/type";

class TodoStore {
  secondsPassed: number = 0
  loading: boolean = false;
  todos = [
    { name: '01', desc: 'Hello', date: 'false', notification: 'jhbhbhb', color: 'nnbvbgv' },
    { name: '01', desc: 'Hello', date: 'false', notification: 'jhbhbhb', color: 'nnbvbgv' }
]

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

  addTodo (item:Todo) {
    this.todos.push(item);
    console.log(item)
  }
}

export default new TodoStore()
