import { TodoModel } from "./TodoModel.js";
import { TodoView } from "./TodoView.js";
import { TodoController } from "./TodoController.js";

new TodoController(new TodoModel(), new TodoView());
