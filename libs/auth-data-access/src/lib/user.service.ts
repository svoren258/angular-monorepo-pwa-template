import { inject, Injectable, signal } from '@angular/core';
import { Auth, user, User } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly auth: Auth = inject(Auth);
  readonly user = signal<User | null>(null);

  constructor() {
    this.getUser();
  }

  getUser(): void {
    user(this.auth).pipe(take(1)).subscribe((aUser) => {
      //handle user state changes here. Note, that user will be null if there is no currently logged in user.
      this.user.set(aUser);
    });
  }
}
