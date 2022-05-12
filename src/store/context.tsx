import {createContext} from "react";
import todoStore from "./index";
import {TodoStore} from "../type/type";

export const TodoContext = createContext<TodoStore>(todoStore)
