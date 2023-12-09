import { inject, Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly afAuth = inject(AngularFireAuth);
  loginWithGoogle(): void {
    this.afAuth.signInWithPopup(new GoogleAuthProvider())
      .then(googleResponse => {
        // Successfully logged in
        console.log(googleResponse);
        // Add your logic here

      }).catch(err => {
      // Login error
      console.log(err);
    });
  }

  async logout(): Promise<void> {
    return this.afAuth.signOut();
  }
}
