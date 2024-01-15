import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'my-pwa-template-accordion',
  standalone: true,
  imports: [
    MatExpansionModule
  ],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
  @Input() title: string | undefined;
  panelOpenState = false;
}
