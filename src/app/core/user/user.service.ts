import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private readonly id: number = Math.floor(Math.random() * 100);
  private readonly isAdmin: boolean = true;

  getId(): number {
    return this.id;
  }

  getIsAdmin(): boolean {
    return this.isAdmin;
  }
}
