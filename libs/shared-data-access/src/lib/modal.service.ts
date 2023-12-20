import { DialogData } from '@angular-monorepo-pwa-template/shared-models';
import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '@my-pwa/shared-ui';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private readonly dialog = inject(MatDialog);
  openDialog(data: DialogData): Observable<unknown> {
    return this.dialog.open(ModalComponent, {
      data
    }).afterClosed();
  }
}
