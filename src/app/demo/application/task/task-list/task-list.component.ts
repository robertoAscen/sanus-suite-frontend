// Angular Import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export default class TaskListComponent {
  // public props
  newTaskTitle!: string;
  todo_list_message_error!: boolean;

  tasks: Task[] = [
    { id: 1, title: 'Industry standard dummy text ever since the 1500s', completed: false },
    { id: 2, title: 'The point of using Lorem Ipsum is that it has a more-or-lesspp', completed: true },
    { id: 3, title: 'Lorem Ipsum Dolor Sit Amet', completed: false },
    { id: 4, title: 'Contrary to popular belief', completed: true },
    { id: 5, title: 'Lorem Ipsum Dolor Sit Amet', completed: false }
  ];

  // public method

  // add new todo list
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

  // remove existing todo
  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  tables = [
    {
      id: '#12',
      list: 'Add Proper Cursor In Sortable Page',
      img: 'assets/images/user/avatar-1.jpg',
      img1: 'assets/images/user/avatar-2.jpg'
    },
    {
      id: '#56',
      list: 'Edit the draft for the icons',
      img: 'assets/images/user/avatar-1.jpg',
      img1: 'assets/images/user/avatar-2.jpg'
    },
    {
      id: '#78',
      list: 'Create UI design model',
      img: 'assets/images/user/avatar-1.jpg',
      img1: 'assets/images/user/avatar-2.jpg',
      img2: 'assets/images/user/avatar-3.jpg'
    },
    {
      id: '#35',
      list: 'Checkbox Design issue',
      img: 'assets/images/user/avatar-1.jpg'
    },
    {
      id: '#20',
      list: 'Create UI design model',
      img: 'assets/images/user/avatar-1.jpg',
      img1: 'assets/images/user/avatar-2.jpg'
    }
  ];
}
