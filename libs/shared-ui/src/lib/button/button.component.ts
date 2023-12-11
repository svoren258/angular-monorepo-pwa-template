import { ButtonType } from '@angular-monorepo-pwa-template/shared-models';
import { Component, Input, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'my-pwa-template-button',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @ViewChild('buttonElement') buttonElement: HTMLElement | undefined;
  @Input() set type(buttonType: ButtonType) {
    if (this.buttonElement) {
      this.buttonElement.setAttribute(buttonType, 'true');
    }
  }
}
