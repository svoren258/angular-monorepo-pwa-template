import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFabButton, MatIconButton } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'my-pwa-template-accordion',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent implements AfterViewInit {
  @Input() title: string | undefined;
  @Output() titleChange = new EventEmitter<string>();
  @ViewChild('checklistTitleInput') checklistTitleInput: ElementRef<HTMLInputElement> | undefined;
  panelOpenState = false;
  inputIsFocused = false;

  titleFormControl = new FormControl();

  ngAfterViewInit(): void {
    this.titleFormControl.setValue(this.title);
  }
  stopEventPropagation(event: Event): void {
    this.inputIsFocused = !this.inputIsFocused;
    event.stopPropagation();
  }

  onTitleChange(event: Event): void {
    this.inputIsFocused = !this.inputIsFocused;
    event.stopPropagation();
    this.titleChange.emit(this.titleFormControl.value);
  }
}
