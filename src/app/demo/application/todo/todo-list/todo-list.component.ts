// Angular Import
import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

//project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoCard {
  title: string;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export default class TodoListComponent {
  // public props
  todo_card_message_error!: boolean;
  todo_modal_message_error!: boolean;
  todo_list_message_error!: boolean;
  newTaskTitle!: string; // for todo list
  newModalMessage!: string; // for todo modal list
  newTodoCard!: string; // fro todo card list

  // constructor
  constructor(private modalService: NgbModal) {}

  // public method

  // ============= to do card list ================//
  todoCard: TodoCard[] = [
    { title: 'Lorem Ipsum Dolor Sit Amet' },
    { title: 'Lorem Ipsum Dolor Sit Amet' },
    { title: 'Lorem Ipsum Dolor Sit Amet' },
    { title: 'Lorem Ipsum Dolor Sit Amet' },
    { title: 'Lorem Ipsum Dolor Sit Amet' },
    { title: 'Lorem Ipsum Dolor Sit Amet' }
  ];

  addTodoCard() {
    if (this.newTodoCard === '' || this.newTodoCard === undefined) {
      this.todo_card_message_error = true;
    } else {
      this.todo_card_message_error = false;
      const newCardList: TodoCard = {
        title: this.newTodoCard
      };
      this.todoCard.push(newCardList);
      this.newTodoCard = '';
    }
  }

  clearAllTodoCard() {
    this.todoCard.splice(0, this.todoCard.length);
  }

  // ============= to do list ================//
  tasks: Task[] = [
    { id: 1, title: 'Industry standard dummy text ever since the 1500s', completed: false },
    { id: 2, title: 'The point of using Lorem Ipsum is that it has a more-or-lesspp', completed: true },
    { id: 3, title: 'Lorem Ipsum Dolor Sit Amet', completed: false },
    { id: 4, title: 'Contrary to popular belief', completed: true },
    { id: 5, title: 'Lorem Ipsum Dolor Sit Amet', completed: false }
  ];

  addTodoList() {
    if (this.newTaskTitle === '' || this.newTaskTitle === undefined) {
      this.todo_list_message_error = true;
    } else {
      this.todo_list_message_error = false;
      const newTask: Task = {
        id: this.tasks.length + 1,
        title: this.newTaskTitle,
        completed: false
      };
      this.tasks.push(newTask);
      this.newTaskTitle = '';
    }
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  // ============= to do modal list ================//

  open(content: ElementRef) {
    this.modalService.open(content);
  }

  tasksModal: Task[] = [
    { id: 1, title: 'Industry standard dummy text ever since the 1500s', completed: false },
    { id: 2, title: 'The point of using Lorem Ipsum is that it has a more-or-lesspp', completed: true },
    { id: 3, title: 'Lorem Ipsum Dolor Sit Amet', completed: false },
    { id: 4, title: 'Contrary to popular belief', completed: true },
    { id: 5, title: 'Lorem Ipsum Dolor Sit Amet', completed: false }
  ];

  addTodoModal() {
    if (this.newModalMessage === '' || this.newModalMessage === undefined) {
      this.todo_modal_message_error = true;
    } else {
      this.todo_modal_message_error = false;
      const newTaskModal: Task = {
        id: this.tasksModal.length + 1,
        title: this.newModalMessage,
        completed: false
      };
      this.tasksModal.push(newTaskModal);
      this.newModalMessage = '';
    }
  }

  deleteTaskModal(taskId: number) {
    this.tasksModal = this.tasksModal.filter((x) => x.id !== taskId);
  }
}
