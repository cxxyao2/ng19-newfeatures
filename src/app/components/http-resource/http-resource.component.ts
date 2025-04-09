import { httpResource } from '@angular/common/http';
import { Component, computed, inject, signal } from '@angular/core';
import { z } from 'zod';

import { Todo, TodoService } from '@app/services/todo.service';
import { Item } from '../template-outlet-demo/template-outlet-demo.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export const todoSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  completed: z.boolean()
});

export const todoListSchema = z.array(todoSchema);

@Component({
  selector: 'app-http-resource',
  imports: [FormsModule, CommonModule],
  templateUrl: './http-resource.component.html',
  styleUrl: './http-resource.component.css'
})
export class HttpResourceComponent {
  readonly #todoService = inject(TodoService);

  query = signal('');

  todosResource = httpResource(() => ({
    url: '/api/todos',
    params: { q: this.query() },
    method: 'GET',
    // use a default value and parse with zod
  }), { defaultValue: [], parse: todoListSchema.parse });


  // searchResult = httpResource(
  //   ()=> `search-api/${query}`,
  //   {defaultValue:[]}
  // );


  todos = computed(() => this.todosResource.value());
  loading = computed(() => this.todosResource.isLoading());
  error = computed(() => this.todosResource.error());
  status = computed(() => this.todosResource.status());

  search(query: string) {
    this.query.set(query);
  }

  addTodo(todo: Todo) {

    const newTodo = {
      userId: todo.userId || 0,
      id: todo.id || 0,
      title: todo.title || '',
      completed: todo.completed || false
    };
    this.todosResource.update(() => {
      return [...this.todosResource.value(), newTodo];
    });

    this.#todoService.createTodo(newTodo).subscribe({
      next: () => this.todosResource.reload(),
    });
  }

  deleteTodo(id: number) {
    this.todosResource.update(() => {
      return this.todosResource.value().filter((todo) => todo.id !== id);
    });

    this.#todoService.deleteTodo(id).subscribe({
      next: () => this.todosResource.reload(),
    });

  }



}
