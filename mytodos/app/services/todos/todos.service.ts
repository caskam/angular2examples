export class TodosService{
  todos: string[];

  constructor(){
    this.todos = ['Apply for leave', 'Create Framework'];
  }

  getTodos(){
    return this.todos;
  }

  addNewTodo(newtodo: string){
    this.todos.push(newtodo);
  }

  removeTodo(todoTobeRemoved: string){
    this.todos.splice(this.todos.indexOf(todoTobeRemoved), 1);
  }

  resetTodos(){
    this.todos.length = 0;
  }
}
