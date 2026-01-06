import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private id: number = Math.floor(Math.random() * 100);

  getId(): number {
    return this.id;
  }
}
