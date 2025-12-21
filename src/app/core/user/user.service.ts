import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private id: number = Math.random();

  getId(): number {
    return this.id;
  }
}
