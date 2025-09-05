export class TodoController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.addButton.addEventListener(
      "click",
      this.handleAddTodo.bind(this)
    );
    this.view.todoList.addEventListener(
      "click",
      this.handleDeleteTodo.bind(this)
    );
  }

  handleAddTodo() {
    const todoText = this.view.input.value.trim();
    if (todoText) {
      this.model.addTodo(todoText);
      this.updateView();
      this.view.input.value = "";
    }
  }

  handleDeleteTodo(event) {
    if (event.target.tagName === "BUTTON") {
      const index = parseInt(event.target.dataset.index, 10);
      this.model.removeTodo(index);
      this.updateView();
    }
  }

  updateView() {
    const todos = this.model.getTodos();
    this.view.renderTodos(todos);
  }
}
