import { RoutesEnum } from '@angular-monorepo-pwa-template/shared-models';
import { inject, Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly afAuth = inject(AngularFireAuth);
  private readonly router = inject(Router);

  loginWithGoogle(): void {
    this.afAuth.signInWithPopup(new GoogleAuthProvider())
      .then(googleResponse => {
        // Successfully logged in
        console.log(googleResponse);
        return this.router.navigateByUrl(RoutesEnum.PLATFORM);
        // Add your logic here

      }).catch(err => {
      // Login error
      console.log(err);
    });
  }

  async logout(): Promise<void> {
    return this.afAuth.signOut().then(() => {
        this.router.navigateByUrl(RoutesEnum.LOGIN);
      }
    ).catch(err => {
      // Login error
      console.log(err);
    });
  }
}
